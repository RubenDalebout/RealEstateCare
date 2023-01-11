<script setup>
import { settings, bookmarkOutline, checkmarkCircle, grid, build, search, alertCircle } from 'ionicons/icons';
</script>
<template>
    <main id="dashboard" class="container-fluid text-dark p-3 d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <router-link to="/scheduled" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="m-auto" id="navigation-bookmarkOutline-icon" :icon="bookmarkOutline"></ion-icon>
                    <span class="fw-bold fs-6 mt-4">Scheduled</span>
                </router-link>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <router-link to="/completed" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="m-auto" id="navigation-checkmarkCircle-icon" :icon="checkmarkCircle"></ion-icon>
                    <span class="fw-bold fs-6 mt-4">Completed</span>
                </router-link>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <router-link to="/knowledge-base" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="m-auto" id="navigation-grid-icon" :icon="grid"></ion-icon>
                    <span class="fw-bold fs-6 mt-4">Knowledge base</span>
                </router-link>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <router-link to="/settings" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="m-auto" id="navigation-settings-icon" :icon="settings"></ion-icon>
                    <span class="fw-bold fs-6 mt-4">Settings</span>
                </router-link>
            </div>
        </div>
    </main>
</template>