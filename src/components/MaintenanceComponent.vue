<template>
    <div>
        <!-- form-group for location input -->
        <div class="form-group">
            <label for="location">Location</label>
            <input type="text" v-model="maintenance.location" class="form-control" id="location">
        </div>
        <!-- form-group for type input -->
        <div class="form-group">
            <label for="type">Type</label>
            <input type="text" v-model="maintenance.type" class="form-control" id="type">
        </div>
        <!-- form-group for acute action checkbox -->
        <div class="form-group">
            <label for="acuteAction">Acute Action</label>
            <input type="checkbox" v-model="maintenance.acuteAction" class="form-control" id="acuteAction">
        </div>
        <!-- form-group for cost estimate input -->
        <div class="form-group">
            <label for="costEstimate">Cost Estimate</label>
            <input type="text" v-model="maintenance.costEstimate" class="form-control" id="costEstimate">
        </div>
        <!-- file input for photos -->
        <input type="file" ref="photos" @change="uploadPhotos" class="form-control" id="photos" multiple>
    </div>
</template>

<script>
    export default {
        name: 'MaintenanceComponent',
        methods: {
            // method for handling photo upload
            uploadPhotos(event) {
            this.maintenance.photos = event.target.files;
            this.$emit('data-updated');
            }
        },
        props: {
            // maintenance data passed as prop
            maintenance: {
            type: Object,
            required: true
            }
        }
    };
</script> 