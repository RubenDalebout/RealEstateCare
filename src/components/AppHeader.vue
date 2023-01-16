<script setup>
import { triangle, ellipse, square, notifications, settings, notificationsOutline } from 'ionicons/icons';
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
                <img alt="Vue logo" class="logo" src="@/assets/realestatecare/logo/logo.svg" height="150" />
            </div>
            <div class="col d-flex justify-content-end gap-2 align-items-center">
                <nav>
                    <ul class="list-unstyled m-0">
                        <li class="d-flex gap-3">
                            <ion-icon class="fs-1" id="notifications-icon" :icon="notificationsOutline"></ion-icon>
                            <router-link to="/settings"><ion-icon class="fs-1" id="settings-icon" :icon="settings"></ion-icon></router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            notificationsEnabled: JSON.parse(localstorage.getItem('user')).settings.notification
        }
    },
}
</script>
