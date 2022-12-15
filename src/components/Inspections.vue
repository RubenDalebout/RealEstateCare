<script>
    import axios from 'axios'; // Import axios
    import InspectionDetails from '@/components/InspectionDetails.vue';

    export default {
        components: {
            InspectionDetails,
        },
        data() {
            return {
            showModal: false,
            selectedInspection: {},
            data: [],
            };
        },
        mounted() {
            axios.get('src/data/inspections.json')
            .then((response) => {
                this.data = response.data;
            });
        },
        methods: {
            showInspectionDetails(inspection) {
            this.showModal = true;
            this.selectedInspection = inspection;
            },
        },
    };
</script>

<template>
    <inspection-details
        v-if="showModal"
        @close="showModal = false"
        :inspection="selectedInspection"
    />
    <div>
        <div v-for="(inspection, index) in data.inspections" class="border-top border-bottom" :key="index">
            <h2>Inspection {{ index + 1 }}</h2>
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