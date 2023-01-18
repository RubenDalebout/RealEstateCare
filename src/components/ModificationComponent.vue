<template>
    <div>
        <div class="card">
            <div class="card-header">
                <button type="button" @click="destroy" class="btn btn-danger float-right">Delete</button>
            </div>
            <div class="card-body">
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
                <!-- file input for photos -->
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
        name: 'ModificationComponent',
        props: {
            modification: {
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
                for (let i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    let reader = new FileReader();
                    reader.onloadend = e => {
                    this.photos.push(e.target.result);
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