import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import './style/main.css' // tailwind
import '@fortawesome/fontawesome-free/css/all.min.css' // fontawesome

createApp(App)
  .use(router)
  .mount('#app')
