<template>
    <main class="container">
        <input type="text" v-model="searchTerm" @input="filterAddresses" placeholder="Search for address or city" class="form-control mb-3">
        <div class="list-group gap-3">
            <div class="list-group-item list-group-item-action d-flex flex-column justify-content-between align-items-center" v-for="address in filteredAddresses" :key="address.id">
                <div>
                    <p>Address: {{ address.street }}, {{ address.city }}</p>
                </div>
                <router-link :to="{ name: 'inspections' }" @click="saveParamsToLocalStorage(address.id)" class="btn btn-primary">View Inspections</router-link>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Search',
    data() {
        return {
            addresses: [],
            searchTerm: '',
            filteredAddresses: [],
        };
    },
    methods: {
        async filterAddresses() {
            this.filteredAddresses = this.addresses.filter(address => {
                return (
                    address.street.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    address.city.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            });
        },
        saveParamsToLocalStorage(addressId) {
            localStorage.setItem('addressId', addressId);
        },
    },
    async created() {
        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
                }
            });
            this.addresses = response.data.record.addresses;
            this.filteredAddresses = this.addresses;
        } catch (error) {
            console.log(error);
        }
    },
    mounted() {
        this.filterAddresses();
    },
    watch: {
        searchTerm: function (newVal) {
            this.filterAddresses();
        }
    }
};
</script>