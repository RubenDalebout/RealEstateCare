import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"

import "@ionic/core/css/ionic.bundle.css"

import { IonicVue, IonIcon } from '@ionic/vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App);


app.use(IonicVue).use(router).use(IonIcon)

app.mount('#app');