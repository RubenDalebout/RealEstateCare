<script setup>
import { build, search, alertCircle } from 'ionicons/icons';
</script>
<template>
    <footer class="container-fluid bg-primary position-fixed bottom-0">
        <div class="row p-2">
            <div class="col d-flex flex-column justify-content-center text-center">
                <ion-icon class="fs-1 m-auto" id="footer-build-icon" :icon="build"></ion-icon>
                <span>Active task</span>
            </div>
            <div class="col d-flex flex-column justify-content-center text-center">
                <ion-icon class="fs-1 m-auto" id="footer-search-icon" :icon="search"></ion-icon>
                <span>Search</span>
            </div>
            <div class="col d-flex flex-column justify-content-center text-center">
                <ion-icon class="fs-1 m-auto" id="footer-alertCircle-icon" :icon="alertCircle"></ion-icon>
                <span>Help</span>
            </div>
        </div>
    </footer>
</template>