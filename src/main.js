// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"

// Import Ionic CSS
import "@ionic/core/css/ionic.bundle.css"

// Import Ionic Vue, IonIcon and IonToast
import { IonicVue, IonIcon, IonToast } from '@ionic/vue';

// Import createApp function from Vue
import { createApp } from 'vue'
// Import createStore function from Vuex
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
        count: 0
        }
    },
    mutations: {
        increment (state) {
        state.count++
        }
    }
});

// Import App.vue and router
import App from './App.vue'
import router from './router'

// Check if the user has dark theme enabled
if (localStorage.getItem('user')) {
    if (JSON.parse(localStorage.getItem('user'))) {
        const usr = JSON.parse(localStorage.getItem('user'));

        // Check if the user has settings and if the dark theme is enabled
        if (usr.settings != undefined && usr.settings != null) {
            if (usr.settings.darkTheme != undefined && usr.settings.darkTheme != null) {
                if (usr.settings.darkTheme) {
                    // Enable dark theme for elements with the attribute "darkTheme"
                    document.querySelectorAll('[darkTheme]').forEach(e => {
                        if (e.getAttribute('disabled') === 'true') {
                            e.removeAttribute('disabled');
                        } else {
                            e.setAttribute('disabled', 'true');
                        }
                    })
                }
            }
        }
    }
}

// Create the Vue app
const app = createApp(App);

// Use Ionic Vue, router, IonIcon and IonToast
app.use(IonicVue).use(router).use(IonIcon).component('ion-icon', IonIcon, {silent: true}).use(IonToast).use(store);

// Mount the app to the element with id "app"
app.mount('#app');