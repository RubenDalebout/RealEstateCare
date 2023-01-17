<template>
    <div>
        <!-- Form for capturing damage information -->
        <div class="form-group">
            <!-- Label for the location input field -->
            <label for="location">Location</label>
            <!-- Input field for capturing the location of the damage -->
            <input type="text" v-model="damage.location" class="form-control" id="location">
        </div>
        <div class="form-group">
            <!-- Label for the new damage checkbox -->
            <label for="new" class="me-2">New</label>
            <!-- Checkbox for marking if the damage is new or existing -->
            <input type="checkbox" v-model="damage.new" class="form-check-input" id="new">
        </div>
        <div class="form-group">
            <!-- Label for the type input field -->
            <label for="type">Type</label>
            <!-- Input field for capturing the type of damage -->
            <input type="text" v-model="damage.type" class="form-control" id="type">
        </div>
        <div class="form-group">
            <!-- Label for the date input field -->
            <label for="date">Date</label>
            <!-- Input field for capturing the date the damage was discovered -->
            <input type="date" v-model="damage.date" class="form-control" id="date">
        </div>
        <div class="form-group">
            <!-- Label for the acute action checkbox -->
            <label for="acuteAction" class="me-2">Acute Action</label>
            <!-- Checkbox for marking if acute action was taken for the damage -->
            <input type="checkbox" v-model="damage.acuteAction" class="form-check-input" id="acuteAction">
        </div>
        <div class="form-group">
            <!-- Label for the description textarea -->
            <label for="description">Description</label>
            <!-- Textarea for capturing a description of the damage -->
            <textarea v-model="damage.description" class="form-control" id="description"></textarea>
        </div>
        <div class="form-group">
            <!-- Label for the photos input field -->
            <label for="photos">Photos</label>
            <!-- Input field for uploading photos of the damage -->
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