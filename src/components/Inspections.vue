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
                <ul>
                    <li>
                        <p>Inspector: {{ inspection.details.inspector }}</p>
                    </li>
                    <li>
                        <p>Date: {{ inspection.details.date }}</p>
                    </li>
                    <li>
                        <p>Finished {{ inspection.details.finished }}</p>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</template>