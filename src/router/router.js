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
      path: '/job-detail/:ref',
      name: 'jobDetail',
      component: jobDetail,
    },
    {
      path: '/experience-admin',
      name: 'experienceAdmin',
      component: ExperienceAdmin,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
