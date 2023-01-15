<template>
    <main class="container list-group gap-3">
        <h1>Inspections {{address}}</h1>
        <div class="list-group-item border-top list-group-item-action d-flex justify-content-between align-items-center" v-for="inspection in inspections" :key="inspection.id">            
            <div>
                <p>Inspection ID: {{ inspection.id }}</p>
                <p>Date: {{ inspection.date }}</p>
                <p>Inspector: {{ inspection.inspector }}</p>
                <div class="badge" :class="{'text-bg-success': inspection.completion, 'text-bg-danger': !inspection.completion }">{{ inspection.completion ? 'Completed' : 'In progress' }}</div>
            </div>
            <router-link :to="{ name: 'inspection', params: { id: inspection.id, address: addressId } }" class="btn btn-primary">Go to Inspection</router-link>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Inspections',
        data() {
        return {
            inspections: [],
            addressId: '',
            address: '',
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

            let address = response.data.record.addresses.filter(address => address.id === this.addressId);
            let inspections = address[0].inspections.filter(inspection => inspection.completion === (this.$route.params.completion === 'true'));
            this.inspections = inspections;
            this.address = address[0].street + ', ' + address[0].city;
        } catch (error) {
            console.log(error);
        }
    }
};
</script>