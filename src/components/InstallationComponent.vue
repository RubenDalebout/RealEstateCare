<template>
    <div>
        <div class="card">
            <div class="card-header">
                <button type="button" @click="destroy" class="btn btn-danger float-right">Delete</button>
            </div>
            <div class="card-body">
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
                    <label for="approved" class="me-2">Approved</label>
                    <input type="checkbox" v-model="installation.approved" class="form-check-input" id="approved">
                </div>
                <!-- Form group for comments input -->
                <div class="form-group">
                    <label for="comments">Comments</label>
                    <input type="text" v-model="installation.comments" class="form-control" id="comments">
                </div>
                <!-- File input for photos -->
                <div class="form-group">
                    <label for="photos">Photos</label>
                    <input type="file" ref="photos" @change="uploadPhotos" class="form-control" id="photos" accept="image/*" multiple>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div v-for="(photo, index) in photos" :key="index" class="col-md-4">
                                <div class="img-container position-relative">
                                    <img :src="photo" class="img-fluid w-50 mb-3 d-block m-auto img-preview">
                                    <button type="button" @click="removePhoto(index)" class="btn btn-danger btn-sm position-absolute top-0 end-0 delete-button">
                                        remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InstallationComponent',
        // Installation object prop
        props: {
            installation: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                photos: [],
            }
        },
        methods: {
            uploadPhotos(event) {
                this.files = Array.from(event.target.files);
                this.installation.photos = [];
                for (let i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    let reader = new FileReader();
                    reader.onloadend = e => {
                        this.photos.push(e.target.result);
                        this.installation.photos.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            },
            removePhoto(index) {
                this.photos.splice(index, 1);
                this.files.splice(index, 1);
                this.updateFileInput();
            },
            updateFileInput() {
                // Now let's create a FileList
                const dataTransfer = new DataTransfer();
                for(let i = 0; i < this.files.length; i++) {
                    dataTransfer.items.add(this.files[i])
                }
                this.$refs.photos.files = dataTransfer.files;

                this.installation.photos = dataTransfer.files;  

                // Help Safari out
                if (this.$refs.photos.webkitEntries.length) {
                    this.$refs.photos.dataset.file = `${dataTransfer.files[0].name}`;
                }
            },
            destroy() {
                // emit the "destroy" event to the parent component
                this.$emit("destroy");
            }
        }
    };
</script>  