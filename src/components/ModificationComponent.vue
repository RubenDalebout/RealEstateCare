<template>
    <div>
      <div class="form-group">
        <label for="existingSituation">Existing Situation</label>
        <input type="text" v-model="modification.existingSituation" class="form-control" id="existingSituation">
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" v-model="modification.location" class="form-control" id="location">
      </div>
      <div class="form-group">
        <label for="performedBy">Performed By</label>
        <input type="text" v-model="modification.performedBy" class="form-control" id="performedBy">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" v-model="modification.description" class="form-control" id="description">
      </div>
      <div class="form-group">
        <label for="action">Action</label>
        <input type="text" v-model="modification.action" class="form-control" id="action">
      </div>
      <div class="form-group">
        <label for="comments">Comments</label>
        <input type="text" v-model="modification.comments" class="form-control" id="comments">
      </div>
      <input type="file" ref="photos" @change="uploadphotos" class="form-control" id="photos" multiple>
  </div>
</template>

<script>
export default {
  name: 'ModificationComponent',
  methods: {
    uploadPhotos(event) {
      this.modification.photos = event.target.files;
      this.$emit('data-updated');
    }
  },
  props: {
    modification: {
      type: Object,
      required: true
    }
  }
};
</script>
  