import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vue-multiselect/dist/vue3-multiselect.css";
import { Multiselect } from "vue-multiselect";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component("multiselect", Multiselect)

app.mount('#app')
