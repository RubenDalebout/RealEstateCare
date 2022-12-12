import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { IonicVue } from '@ionic/vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(IonicVue).use(router)

app.mount('#app')
