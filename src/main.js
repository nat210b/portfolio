import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import './style/main.css' // tailwind

createApp(App)
  .use(router)
  .mount('#app')
