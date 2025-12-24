import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../component/index.vue'
// import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(), // 🔥 ห้ามลืมเด็ดขาด
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ],
})

export default router
