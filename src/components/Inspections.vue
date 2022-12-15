<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios.get('src/data/inspections.json')
      .then((response) => {
        this.data = response.data;
      });
  },
};
</script>
<template>
    <div>
        <div v-for="(inspection, index) in data.inspections" class="border-top border-bottom">
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

            <inspection-details v-if="showModal" @close="showModal = false" :inspection="selectedInspection" />
        </div>
    </div>
</template>
<script>
import InspectionDetails from '@/components/InspectionDetails.vue';

export default {
  components: {
    InspectionDetails,
  },
  data() {
    return {
      showModal: false,
      selectedInspection: {},
    };
  },
  methods: {
    showInspectionDetails(inspection) {
      this.showModal = true;
      this.selectedInspection = inspection;
    },
  },
};
</script>