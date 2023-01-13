<template>
    <main class="container list-group gap-3">
        
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Inspections',
        data() {
        return {
            inspection: [],
            addressId: '',
        };
    },
    async created() {
        let ids = JSON.parse(this.$route.params.id);
        this.addressId= Number(ids[0]);
        let inspectionId = Number(ids[1]);

        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                }
            });
            
            this.inspection = response.data.record.addresses.filter(address => address.id === this.addressId)[0].inspections.filter(inspection => inspection.id === inspectionId)[0];
        } catch (error) {
            console.log(error);
        }
    }
};
</script>