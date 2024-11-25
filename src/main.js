import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
const pinia = createPinia()
import dotenv from 'dotenv'

app.use(router)
app.use(pinia)
app.use(store)
app.use(dotenv)
app.mount('#app')