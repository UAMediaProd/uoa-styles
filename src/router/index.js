import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/colours',
    name: 'colours',
    component: () => import('../views/ColoursView.vue')
  },
  {
    path: '/rive',
    name: 'rive',
    component: () => import('../views/RiveView.vue')
  },
  {
    path: '/au',
    name: 'au',
    component: () => import('../views/AUView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router