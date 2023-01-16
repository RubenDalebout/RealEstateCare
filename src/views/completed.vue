<template>
    <main class="container">
        <router-link :to="{ name: 'home' }" class="btn btn-danger">Go back</router-link>
        <h1>Address List</h1>
        <div class="list-group">
            <a href="#" v-for="address in addresses" :key="address.id" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                {{ address.street }}, {{ address.city }}
                <button class="btn btn-primary" @click="viewInspections(address.id, true)">View Inspections</button>
            </a>
        </div>
    </main>
</template>
  
<script>
    import axios from 'axios';
  
    export default {
        name: "AddressList",
        data() {
            return {
                addresses: []
        };
    },
    async created() {
        localStorage.setItem('completion', true);
        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                }
            });
            
            this.addresses = response.data.record.addresses;

            for (let i = 0; i < response.data.record.addresses.length; i++) {
                let address = response.data.record.addresses[i];
                if (address.inspections === null || address.inspections === undefined) continue;

                let found = false;
                for (let j = 0; j < address.inspections.length; j++) {
                    let inspection = address.inspections[j];
                    if (inspection.inspector === JSON.parse(localStorage.getItem('user')).id && inspection.completion === JSON.parse(localStorage.getItem('completion'))) {
                        found = true;
                        console.log(inspection)
                        break;
                    }
                }

                if (!found) {
                    response.data.record.addresses.splice(i, 1);
                    i--;
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async viewInspections(id, completion) {
            try {
                localStorage.setItem('addressId', id);
                localStorage.setItem('completion', completion)
                this.$router.push({ name: 'inspections'});
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>