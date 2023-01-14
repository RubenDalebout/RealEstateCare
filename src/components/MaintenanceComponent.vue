<template>
    <div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" v-model="maintenance.location" class="form-control" id="location">
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <input type="text" v-model="maintenance.type" class="form-control" id="type">
      </div>
      <div class="form-group">
        <label for="acuteAction">Acute Action</label>
        <input type="checkbox" v-model="maintenance.acuteAction" class="form-control" id="acuteAction">
      </div>
      <div class="form-group">
        <label for="costEstimate">Cost Estimate</label>
        <input type="text" v-model="maintenance.costEstimate" class="form-control" id="costEstimate">
      </div>
      <input type="file" ref="photos" @change="uploadPhotos" class="form-control" id="photos" multiple>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MaintenanceComponent',
    methods: {
      uploadPhotos(event) {
        this.maintenance.photos = event.target.files;
        this.$emit('data-updated');
      }
    },
    props: {
      maintenance: {
        type: Object,
        required: true
      }
    }
  };
  </script>  