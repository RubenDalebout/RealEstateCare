<template>
    <main class="container">
        <!-- Router link to the dashboard -->
        <router-link :to="{ name: 'home' }" class="btn btn-danger">Go back</router-link>
        <h1>Address List</h1>
        <!-- Container for a list of addresses -->
        <div class="list-group">
            <a href="#" v-for="address in addresses" :key="address.id" class="list-group-item list-group-item-action d-flex flex-column justify-content-between align-items-center">
                {{ address.street }}, {{ address.city }}
                <!-- View inspection button -->
                <button class="btn btn-primary" @click="viewInspections(address.id, false)">View Inspections</button>
            </a>
        </div>
    </main>
</template>
  
<script>
    // Import axios
    import axios from 'axios';
    import store from '../store/store.js'

    store.commit('toggleCompletion', false);
  
    export default {
        name: "AddressList",
        data() {
            return {
                addresses: []
        };
    },
    async created() {
        // Set completion to false in localStorage
        
        try {
            // Make a GET request to the specified API endpoint
            const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                }
            });

            // Assign addresses to the component's data
            this.addresses = response.data.record.addresses;
            
            // Iterate through addresses and remove those that do not have inspections by the current user and with the current completion status
            for (let i = 0; i < response.data.record.addresses.length; i++) {
                let address = response.data.record.addresses[i];
                if (address.inspections === null || address.inspections === undefined) continue;

                let found = false;
                for (let j = 0; j < address.inspections.length; j++) {
                    let inspection = address.inspections[j];
                    if (inspection.inspector === store.getters.userID && inspection.completion === store.getters.completion) {
                        found = true;
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
                // Save the address id to local storage so it can be accessed in the inspections view
                store.commit("changeAddress", id)
                // Save the completion status to local storage so it can be accessed in the inspections view
                store.commit("toggleCompletion", completion)
                // Navigate to the inspections view
                this.$router.push({ name: 'inspections'});
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>