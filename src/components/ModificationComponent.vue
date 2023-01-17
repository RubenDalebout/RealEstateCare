<template>
    <div>
        <div class="form-group">
            <label for="existingSituation">Existing Situation</label>
            <!-- Bind the input value to the "existingSituation" property of the "modification" object -->
            <input type="text" v-model="modification.existingSituation" class="form-control" id="existingSituation">
        </div>
        <div class="form-group">
            <label for="location">Location</label>
            <!-- Bind the input value to the "location" property of the "modification" object -->
            <input type="text" v-model="modification.location" class="form-control" id="location">
        </div>
        <div class="form-group">
            <label for="performedBy">Performed By</label>
            <!-- Bind the input value to the "performedBy" property of the "modification" object -->
            <input type="text" v-model="modification.performedBy" class="form-control" id="performedBy">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <!-- Bind the input value to the "description" property of the "modification" object -->
            <input type="text" v-model="modification.description" class="form-control" id="description">
        </div>
        <div class="form-group">
            <label for="action">Action</label>
            <!-- Bind the input value to the "action" property of the "modification" object -->
            <input type="text" v-model="modification.action" class="form-control" id="action">
        </div>
        <div class="form-group">
            <label for="comments">Comments</label>
            <!-- Bind the input value to the "comments" property of the "modification" object -->
            <input type="text" v-model="modification.comments" class="form-control" id="comments">
        </div>
        <!--  Pass the selected photos to the "uploadPhotos" method  -->
        <label for="photos">Photos</label>
        <input type="file" ref="photos" @change="uploadphotos" class="form-control" id="photos" multiple>
    </div>
</template>

<script>
    export default {
        name: 'ModificationComponent',
        methods: {
        // Assign the selected photos to the "photos" property of the "modification" object and emit an event "data-updated"
        uploadPhotos(event) {
            this.modification.photos = event.target.files;
            this.$emit('data-updated');
        }
        },
        props: {
        // The component expects an object to be passed as a prop, named "modification"
        modification: {
            type: Object,
            required: true
        }
    }
    };
</script>