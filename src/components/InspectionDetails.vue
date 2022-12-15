<template>
    <!-- Modal -->
    <div class="modal-backdrop fade show"></div>
        <div class="modal fade show d-block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Inspectie details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
                    </div>
                    <div class="modal-body">
                        <h3>Damage(s)</h3>
            <div class="border-bottom">
                <div v-for="damage in inspection.damages">
            <p>Location: {{ damage.location }}</p>
            <p>New damage: {{ damage.new_damage }}</p>
            <p>Type of damage: {{ damage.type_of_damage }}</p>
            <p>Date: {{ damage.date }}</p>
            <p>Acute action: {{ damage.acute_action }}</p>
            <p>Description: {{ damage.description }}</p>
            <p>Pictures: {{ damage.pictures }}</p>
          </div>
            </div>
          <h3>Overdue maintenance(s)</h3>
          <div class="border-bottom">
            <div v-for="overdue_maintenance in inspection.overdue_maintenance">
            <p>Location: {{ overdue_maintenance.location }}</p>
            <p>Type of maintenance: {{ overdue_maintenance.type_of_maintenance }}</p>
            <p>Acute action: {{ overdue_maintenance.acute_action }}</p>
            <p>Cost indication: {{ overdue_maintenance.cost_indication }}</p>
            <p>Pictures: {{ overdue_maintenance.pictures }}</p>
          </div>
          </div>
          <h3>Technical installation(s)</h3>
          <div class="border-bottom">
            <div v-for="technical_installation in inspection.technical_installations">
            <p>Location: {{ technical_installation.location }}</p>
            <p>Type of installation: {{ technical_installation.type_of_installation }}</p>
            <p>Reported failures: {{ technical_installation.reported_failures }}</p>
            <p>Test procedure: {{ technical_installation.test_procedure }}</p>
            <p>Approved: {{ technical_installation.approved }}</p>
            <p>Comments: {{ technical_installation.comments }}</p>
            <p>Pictures: {{ technical_installation.pictures }}</p>
          </div>
          </div>
          <h3>Modification(s)</h3>
          <div v-for="modification in inspection.modifications">
            <p>Existing Situation: {{ modification.existing_situation }}</p>
            <p>Executor: {{ modification.executor }}</p>
            <p>Description: {{ modification.description }}</p>
            <p>Action: {{ modification.action }}</p>
            <p>Comments: {{ modification.comments }}</p>
            <p>Pictures: {{ modification.pictures }}</p>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    props: {
      inspection: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  