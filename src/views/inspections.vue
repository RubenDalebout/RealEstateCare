<template>
    <main>
        <h1>Inspections</h1>
        <h2>{{addressId}}</h2>
        <div v-for="inspection in inspections" :key="inspection.id">
            <p>ID: {{ inspection.id }}</p>
            <p>Completed: {{ inspection.completed }}</p>
        </div>
    </main>
</template>
<script>
    import axios from 'axios';
import { add } from 'ionicons/icons';

    export default {
        name: 'Inspections',
        data() {
        return {
            inspections: [],
            addressId: ''
        };
    },
    async created() {
        this.addressId = Number(this.$route.params.id);

        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                }
            });

            let inspections = response.data.record.addresses.filter(address => address.id === this.addressId)[0].inspections.filter(inspection => inspection.completed === this.$route.params.completed);
            this.inspections = inspections;
        } catch (error) {
            console.log(error);
        }
    }
};
</script>