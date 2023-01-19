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

// Import store
import store from './store/store.js'

// Import App.vue and router
import App from './App.vue'
import router from './router'

// Create the Vue app
const app = createApp(App);

// Use Ionic Vue, router, IonIcon and IonToast
app.use(IonicVue).use(router).use(IonIcon).component('ion-icon', IonIcon, {silent: true}).use(IonToast).use(store);

// Mount the app to the element with id "app"
app.mount('#app');

router.beforeEach((to, from, next) => {
    // check if the user is not trying to access the login page and if the user is not logged in
    if (to.name != 'login' && Object.keys(store.getters.user).length < 1) {
        // redirect the user to the login page
        next({ name: 'login' })
    } else {
        // check if the user is trying to access the login page and if the user is already logged in
        if (to.name === 'login' && Object.keys(store.getters.user).length > 0 && store.getters.user.id != null && store.getters.user.id != undefined) {
            // redirect the user to the home page
            next({name: 'home'});
        } else {
            // continue to the next route
            next();
        }
    }
})