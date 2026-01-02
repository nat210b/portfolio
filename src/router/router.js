import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../component/index.vue'
import jobDetail from '../component/jobDetail.vue'
import ExperienceAdmin from '../component/ExperienceAdmin.vue'

const router = createRouter({
  history: createWebHistory(), // 🔥 ห้ามลืมเด็ดขาด
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/job-detail/:id',
      name: 'jobDetail',
      component: jobDetail,
    },
    {
      path: '/experience-admin',
      name: 'experienceAdmin',
      component: ExperienceAdmin,
    }
  ],
})

export default router
