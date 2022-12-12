<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { settings, bookmarkOutline, checkmarkCircle, grid, build, search, alertCircle } from 'ionicons/icons';
</script>

<template>
    <app-header />
    <main id="dashboard" class="container-fluid text-dark p-5 d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <ion-icon class="m-auto" id="navigation-bookmarkOutline-icon" :icon="bookmarkOutline"></ion-icon>
                <span class="fw-bold fs-5 mt-4">Scheduled</span>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <ion-icon class="m-auto" id="navigation-checkmarkCircle-icon" :icon="checkmarkCircle"></ion-icon>
                <span class="fw-bold fs-5 mt-4">Completed</span>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <ion-icon class="m-auto" id="navigation-grid-icon" :icon="grid"></ion-icon>
                <span class="fw-bold fs-5 mt-4">Knowledge base</span>
            </div>
            <div class="col-6 d-flex flex-column align-items-center justify-content-center p-3">
                <ion-icon class="m-auto" id="navigation-settings-icon" :icon="settings"></ion-icon>
                <span class="fw-bold fs-5 mt-4">Settings</span>
            </div>
        </div>
    </main>
    <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>