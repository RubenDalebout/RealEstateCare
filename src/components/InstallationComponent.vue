<template>
    <div>
        <!-- Form group for location input -->
        <div class="form-group">
            <label for="location">Location</label>
            <input type="text" v-model="installation.location" class="form-control" id="location">
        </div>
        <!-- Form group for type input -->
        <div class="form-group">
            <label for="type">Type</label>
            <input type="text" v-model="installation.type" class="form-control" id="type">
        </div>
        <!-- Form group for reported errors input -->
        <div class="form-group">
            <label for="reportedErrors">Reported Errors</label>
            <input type="text" v-model="installation.reportedErrors" class="form-control" id="reportedErrors">
        </div>
        <!-- Form group for test procedure input -->
        <div class="form-group">
            <label for="testProcedure">Test Procedure</label>
            <input type="text" v-model="installation.testProcedure" class="form-control" id="testProcedure">
        </div>
        <!-- Form group for approved checkbox -->
        <div class="form-group">
            <label for="approved">Approved</label>
            <input type="checkbox" v-model="installation.approved" class="form-check-input" id="approved">
        </div>
        <!-- Form group for comments input -->
        <div class="form-group">
            <label for="comments">Comments</label>
            <input type="text" v-model="installation.comments" class="form-control" id="comments">
        </div>
        <!-- File input for photos -->
        <label for="photos">Photos</label>
        <input type="file" ref="photos" @change="uploadPhotos" class="form-control" id="photos" multiple>
    </div>
</template>

<script>
    export default {
        name: 'InstallationComponent',
        // Method for uploading photos
        methods: {
            uploadPhotos(event) {
                this.installation.photos = event.target.files;
                this.$emit('data-updated');
            }
        },
        // Installation object prop
        props: {
            installation: {
                type: Object,
                required: true
            }
        }
    };
</script>  