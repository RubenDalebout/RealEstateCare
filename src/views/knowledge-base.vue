<template>
    <main class="container">
        <div class="row">
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 1</h5>
                    <a @click="downloadFile('src/files/example-document-1.docx')" download class="btn btn-primary">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 2</h5>
                    <a @click="downloadFile('src/files/example-document-2.docx')" download class="btn btn-primary">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 3</h5>
                    <a @click="downloadFile('src/files/example-document-3.docx')" download class="btn btn-primary">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 4</h5>
                    <a @click="downloadFile('src/files/example-document-4.docx')" download class="btn btn-primary">Download</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import FileSaver from 'file-saver';
export default {
  methods: {
    downloadFile(fileUrl) {
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
        FileSaver.saveAs(blob, fileUrl.split('/').pop());
        });
    },
  },
}
</script>