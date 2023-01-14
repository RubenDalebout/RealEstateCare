<template>
  <div>
    <div class="form-group">
      <label for="location">Location</label>
      <input type="text" v-model="damage.location" class="form-control" id="location">
    </div>
    <div class="form-group">
      <label for="new">New</label>
      <input type="checkbox" v-model="damage.new" class="form-control" id="new">
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <input type="text" v-model="damage.type" class="form-control" id="type">
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input type="date" v-model="damage.date" class="form-control" id="date">
    </div>
    <div class="form-group">
      <label for="acuteAction">Acute Action</label>
      <input type="checkbox" v-model="damage.acuteAction" class="form-control" id="acuteAction">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="damage.description" class="form-control" id="description"></textarea>
    </div>
    <div class="form-group">
      <label for="photos">Photos</label>
      <input type="file" ref="photos" class="form-control" id="photos" multiple>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DamageComponent',
  props: {
    damage: {
      type: Object,
      required: true
    }
  }
};
</script>
