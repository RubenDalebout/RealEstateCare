<script setup>
    import { triangle, ellipse, square, settings, notificationsOutline, notificationsOffOutline } from 'ionicons/icons';
</script>

<template>
    <header class="bg-dark container-fluid">
        <div class="row">
            <div class="col bg-primary p-2 d-flex justify-content-end gap-2">
                <!-- Iconbar icons -->
                <ion-icon id="iconbar-square" :icon="square"></ion-icon>
                <ion-icon id="iconbar-ellipse" :icon="ellipse"></ion-icon>
                <ion-icon id="iconbar-triangle" :icon="triangle"></ion-icon>
            </div>
        </div>

        <div class="row text-light p-3">
            <div class="col">
                <!-- Logo image -->
                <img alt="Vue logo" class="logo" src="@/assets/realestatecare/logo/logo.svg" height="150" />
            </div>
            <div class="col d-flex justify-content-end gap-2 align-items-center">
                <nav>
                    <ul class="list-unstyled m-0">
                        <li class="d-flex gap-3">
                            <!-- Notifications and settings icons -->
                            <ion-icon v-if="notificationsEnabled" class="fs-1" id="notifications-icon" :icon="notificationsOutline"></ion-icon>
                            <ion-icon v-else class="fs-1" id="notifications-off-icon" :icon="notificationsOffOutline"></ion-icon>
                            <router-link v-if="loggedIn" to="/settings"><ion-icon class="fs-1" id="settings-icon" :icon="settings"></ion-icon></router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import store from '../store/store.js'

    export default {
        data() {
            // notificationsEnabled is used to check if notifications are enabled or not
            let notificationsEnabled = true;
            // loggedIn is used to check if user is logged in or not
            let loggedIn = false;
            // checking if user is logged in
            if (Object.keys(store.getters.user).length > 0 && store.getters.user.id != null && store.getters.user.id != undefined) {
                loggedIn = true;
                // checking if notifications are enabled in user's settings
                if (Object.keys(store.getters.user.settings).length > 0 && store.getters.user.settings.notifications != null && store.getters.user.settings.notifications != undefined) {
                    notificationsEnabled = (store.getters.user.settings.notifications) ? true : false;
                }
            }
            return {
                loggedIn: loggedIn,
                notificationsEnabled: notificationsEnabled,
            }
        },
    }
</script>