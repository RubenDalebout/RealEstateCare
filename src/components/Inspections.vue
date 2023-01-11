<script>
    import axios from 'axios'; // Import the axios library for making HTTP requests
    import InspectionDetails from '@/components/InspectionDetails.vue'; // Import the "InspectionDetails" component

    export default {
        props: ['finished'],
        components: {
            InspectionDetails, // Register the "InspectionDetails" component so it can be used in the template
        },
        data() {
            return {
            showModal: false, // A flag for controlling the visibility of the modal
            selectedInspection: {}, // The inspection object to display in the modal
            data: [], // The data array that will hold the inspection objects
            };
        },
        mounted() {
            // Fetch the inspection data from the "inspections.json" file
            axios.get('src/data/inspections.json')
            .then((response) => {
                this.data = response.data.inspections.filter(inspection => inspection.details.finished === this.finished); // Set the data array to the fetched data

                // Fetch the user data from the "users.json" file
                axios.get('src/data/users.json')
                .then((response) => {
                    this.users = response.data;
                    // Iterate over the inspections and find the corresponding user and add the first and last name to the inspection object
                    this.data.forEach(inspection => {
                        const user = this.users.find(user => user.id === inspection.details.inspector);
                        
                        if (user) inspection.details.inspector = `${user.firstName} ${user.lastName}`;
                    });
                });
            });
        },
        methods: {
            showInspectionDetails(inspection) {
            this.showModal = true; // Set the "showModal" flag to true to show the modal
            this.selectedInspection = inspection; // Set the "selectedInspection" to the selected inspection object
            },
        },
    };
</script>

<template>
    <!-- 
    Only render the modal if the "showModal" flag is true
    Listen for the "close" event from the modal and set the "showModal" flag to false when it is emitted
    Pass the "selectedInspection" object to the modal as a prop
     -->
    <inspection-details
        v-if="showModal"
        @close="showModal = false"
        :inspection="selectedInspection"
    />
    <div>
        <div v-for="(inspection, index) in data" class="border-top border-bottom" :key="index">
            <h2>Inspection {{ inspection.details.street + " " + inspection.details.housenumber + ", " + inspection.details.city}} </h2>
            <div>
                <h3>Details:</h3>
                <p>Inspector: {{ inspection.details.inspector }}</p>
                <p>Date: {{ inspection.details.date }}</p>
                <p>Finished: {{ inspection.details.finished }}</p>
                <button type="button" class="btn btn-primary" @click="showInspectionDetails(inspection)">
                View Details
                </button>
            </div>
        </div>
    </div>
</template>

