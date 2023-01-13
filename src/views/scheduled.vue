<template>
    <div>
        <h1>Address List</h1>
        <div class="list-group">
            <a href="#" v-for="address in addresses" :key="address.id" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                {{ address.street }}, {{ address.city }}
                <button class="btn btn-primary" @click="viewInspections(address.id)">View Inspections</button>
            </a>
        </div>
    </div>
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
    created() {
        axios({
            method: 'get',
            url: `https://jsonbin.org/63c1a09815ab31599e35cf00`,
            headers: {
                'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
            }
        }).then(response => {
            this.addresses = response.data.addresses;
        }).catch(error => {
            console.log(error);
        });
    },
    methods: {
        viewInspections(id) {
            this.$router.push({ name: 'inspections', params: { id } });
        }
    }
};
</script>