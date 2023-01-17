<script setup>
    // import the build, search, and alertCircle icons from the ionicons library 
    import { build, search, alertCircle } from 'ionicons/icons';
</script>
<template>
    <footer class="container-fluid bg-primary position-fixed bottom-0">
        <div class="row p-2">
            <div class="col d-flex flex-column justify-content-center text-center">
                <!-- if the user is logged in, display a router link to the homepage that when clicked, shows the active task -->
                <router-link v-if="loggedIn" to="/" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="fs-1 m-auto" id="footer-build-icon" :icon="build"></ion-icon>
                    <span>Active task</span>
                </router-link>
            </div>
            <div class="col d-flex flex-column justify-content-center text-center">
                <!-- if the user is logged in, display a router link to the search page -->
                <router-link v-if="loggedIn" to="/search" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="fs-1 m-auto" id="footer-search-icon" :icon="search"></ion-icon>
                    <span>Search</span>
                </router-link>
            </div>
            <div class="col d-flex flex-column justify-content-center text-center">
                <!-- if the user is logged in, display a router link to the help page -->
                <router-link v-if="loggedIn" to="/help" class="d-flex flex-column align-items-center justify-content-center">
                    <ion-icon class="fs-1 m-auto" id="footer-alertCircle-icon" :icon="alertCircle"></ion-icon>
                    <span>Help</span>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            let loggedIn = false;
                // check if there is a user in local storage
                if (localStorage.getItem('user')) {
                    // if there is a user in local storage, parse the user object and set loggedIn to true
                    if (localStorage.getItem('user')) {
                        if (JSON.parse(localStorage.getItem('user'))) {
                            loggedIn = true;
                        }
                    }
                }
            // return the data object with the loggedIn variable
            return {
                loggedIn: loggedIn,
            }
        },
    }
</script>