<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { triangle, ellipse, square, notifications, settings, bookmarkOutline, checkmarkCircle, grid, build, search, alertCircle } from 'ionicons/icons';
</script>

<template>
    <header class="bg-dark container-fluid">
        <div class="row">
            <div class="col bg-primary p-2 d-flex justify-content-end gap-2">
                <ion-icon id="iconbar-square" :icon="square"></ion-icon>
                <ion-icon id="iconbar-ellipse" :icon="ellipse"></ion-icon>
                <ion-icon id="iconbar-triangle" :icon="triangle"></ion-icon>
            </div>
        </div>

        <div class="row text-light p-3">
            <div class="col">
                <img alt="Vue logo" class="logo" src="@/assets/realestatecare/logo/logo.svg" />
            </div>
            <div class="col d-flex justify-content-end gap-2 align-items-center">
                <ion-button>
                    <ion-icon class="fs-1" id="notifications-icon" :icon="notifications"></ion-icon>
                </ion-button>
                <ion-button>
                    <ion-icon class="fs-1" id="notifications-icon" :icon="settings"></ion-icon>
                </ion-button>
            </div>
        </div>
    </header>

    <main id="dashboard" class="container-fluid text-dark d-flex align-items-center justify-content-center">
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

    <footer class="container-fluid bg-primary">
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