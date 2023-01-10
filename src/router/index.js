import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import('../views/completed.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/help.vue')
    },
    {
      path: '/knowledge-base',
      name: 'knowledge-base',
      component: () => import('../views/knowledge-base.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/notifications.vue')
    },
    {
      path: '/scheduled',
      name: 'scheduled',
      component: () => import('../views/scheduled.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }
  ],
})

export default router
