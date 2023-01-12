import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"

import "@ionic/core/css/ionic.bundle.css"

import { IonicVue, IonIcon } from '@ionic/vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if (localStorage.getItem('user')) {
    if (JSON.parse(localStorage.getItem('user'))) {
        const usr = JSON.parse(localStorage.getItem('user'));

        if (usr.settings != undefined && usr.settings != null) {
            if (usr.settings.darkTheme != undefined && usr.settings.darkTheme != null) {
                if (usr.settings.darkTheme) {
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

const app = createApp(App);

app.use(IonicVue).use(router).use(IonIcon).component('ion-icon', IonIcon, {silent: true});

app.mount('#app');