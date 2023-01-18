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
        <div class="form-group">
            <label for="photos">Photos</label>
            <div class="d-flex gap-3">
                <input type="file" ref="photos" @change="uploadphotos" class="form-control mr-2" id="photos" multiple>
                <button type="button" class="btn btn-primary" @click="openCamera">Take pictures</button>
            </div>
        </div>
        <div class="camera-preview flex-column align-items-center justify-content-center bg-primary position-fixed top-0 start-0 vh-100 w-100" ref="cameraPreview" style="display: none;">
            <video class="w-100" ref="video" autoplay playsinline></video>
            <div class="d-flex gap-3 mt-3">
                <button type="button" class="btn btn-danger" @click="closeCamera">Cancel</button>
                <button type="button" class="btn btn-success" @click="capture">Capture</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModificationComponent',
        methods: {
            uploadPhotos(event) {
                this.modification.photos = event.target.files;
                this.$emit('data-updated');
            },
            openCamera() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    alert("Your browser does not support camera access");
                    return;
                }
                navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                    this.stream = stream;
                    this.$refs.video.srcObject = stream;
                    this.$refs.cameraPreview.style.display = "flex";
                }).catch(error => {
                    if (error.name === 'NotAllowedError') {
                        alert("Please allow camera access to continue");
                    }
                });
            },
            closeCamera() {
                this.stream.getTracks().forEach(track => track.stop());
                this.$refs.cameraPreview.style.display = "none";
            },  
            capture() {
                let canvas = document.createElement("canvas");
                canvas.width = this.$refs.video.videoWidth;
                canvas.height = this.$refs.video.videoHeight;
                canvas.getContext("2d").drawImage(this.$refs.video, 0, 0);
                let capturedImage = new Image();
                capturedImage.src = canvas.toDataURL();
                document.body.appendChild(capturedImage);
                this.stream.getTracks().forEach(track => track.stop());
                this.$refs.cameraPreview.style.display = "none";
                this.dataURItoFile(capturedImage.src)
                .then(file => {
                    let files = new DataTransfer();
                    files.items.add(file);
                    this.modification.photos = files.files;
                })
                .catch(error => {
                    console.error(error);
                });
            },
            dataURItoFile(dataURI) {
                return fetch(dataURI)
                .then(response => response.blob())
                .then(blob => new File([blob], "captured_image.jpg", { type: "image/jpeg" }));
            }
        },
        data() {
            return {
                stream: null
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