<template>
    <main class="container">
        <div class="row">
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 1</h5>
                    <!-- download file 1 -->
                    <a @click="downloadFile('src/files/example-document-1.docx')" download class="btn btn-primary" aria-label="Download example document 1">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 2</h5>
                    <!-- download file 2 -->
                    <a @click="downloadFile('src/files/example-document-2.docx')" download class="btn btn-primary" aria-label="Download example document 2">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 3</h5>
                    <!-- download file 3 -->
                    <a @click="downloadFile('src/files/example-document-3.docx')" download class="btn btn-primary" aria-label="Download example document 3">Download</a>
                </div>
            </div>
            <div class="col-sm-6 mt-3">
                <div class="border rounded p-3">
                    <h5>Example document 4</h5>
                    <!-- download file 4 -->
                    <a @click="downloadFile('src/files/example-document-4.docx')" download class="btn btn-primary" aria-label="Download example document 4">Download</a>
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
                // fetch the file from the provided url
                fetch(fileUrl)
                // convert the file to a blob
                .then(response => response.blob())
                // use the FileSaver library to save the file
                .then(blob => {
                    FileSaver.saveAs(blob, fileUrl.split('/').pop());
                });
            },
        },
    }
</script>