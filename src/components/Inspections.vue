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
        <div v-for="inspection in data.inspections">
            <h2>Inspection</h2>
            <div>
                <h3>Damages:</h3>
                <ul>
                    <li v-for="damage in inspection.damages">
                        <p>Location: {{ damage.location }}</p>
                        <p>New damage: {{ damage.new_damage }}</p>
                        <p>Type of damage: {{ damage.type_of_damage }}</p>
                        <p>Date: {{ damage.date }}</p>
                        <p>Acute action: {{ damage.acute_action }}</p>
                        <p>Description: {{ damage.description }}</p>
                        <p>Pictures: {{ damage.pictures }}</p>
                    </li>
                </ul>
                <h3>Overdue maintenance:</h3>
                <ul>
                    <li v-for="overdue_maintenance in inspection.overdue_maintenance">
                        <p>Location: {{ overdue_maintenance.location }}</p>
                        <p>Type of maintenance: {{ overdue_maintenance.type_of_maintenance }}</p>
                        <p>Acute action: {{ overdue_maintenance.acute_action }}</p>
                        <p>Cost indication: {{ overdue_maintenance.cost_indication }}</p>
                        <p>Pictures: {{ overdue_maintenance.pictures }}</p>
                    </li>
                </ul>
                <h3>Technical installations:</h3>
                <ul>
                    <li v-for="technical_installation in inspection.technical_installations">
                        <p>Location: {{ technical_installation.location }}</p>
                        <p>Type of installation: {{ technical_installation.type_of_installation }}</p>
                        <p>Reported failures: {{ technical_installation.reported_failures }}</p>
                        <p>Test procedure: {{ technical_installation.test_procedure }}</p>
                        <p>Approved: {{ technical_installation.approved }}</p>
                        <p>Comments: {{ technical_installation.comments }}</p>
                        <p>Pictures: {{ technical_installation.pictures }}</p>
                    </li>
                </ul>
                <h3>Modifications:</h3>
                <ul>
                    <li v-for="modification in inspection.modifications">
                        <p>Existing situation: {{ modification.existing_situation }}</p>
                        <p>Location: {{ modification.location }}</p>
                        <p>Executor: {{ modification.executor }}</p>
                        <p>Description: {{ modification.description }}</p>
                        <p>Action: {{ modification.action }}</p>
                        <p>Comments: {{ modification.comments }}</p>
                        <p>Pictures: {{ modification.pictures }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>