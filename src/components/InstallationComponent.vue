<template>
    <div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" v-model="installation.location" class="form-control" id="location">
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <input type="text" v-model="installation.type" class="form-control" id="type">
      </div>
      <div class="form-group">
        <label for="reportedErrors">Reported Errors</label>
        <input type="text" v-model="installation.reportedErrors" class="form-control" id="reportedErrors">
      </div>
      <div class="form-group">
        <label for="testProcedure">Test Procedure</label>
        <input type="text" v-model="installation.testProcedure" class="form-control" id="testProcedure">
      </div>
      <div class="form-group">
        <label for="approved">Approved</label>
        <input type="checkbox" v-model="installation.approved" class="form-control" id="approved">
      </div>
      <div class="form-group">
      <label for="comments">Comments</label>
      <input type="text" v-model="installation.comments" class="form-control" id="comments">
    </div>
    <input type="file" ref="photos" @change="uploadPhotos" class="form-control" id="photos" multiple>
  </div>
</template>

<script>
export default {
  name: 'InstallationComponent',
  methods: {
    uploadPhotos(event) {
      this.installation.photos = event.target.files;
      this.$emit('data-updated');
    }
  },
  props: {
    installation: {
      type: Object,
      required: true
    }
  }
};
</script>  