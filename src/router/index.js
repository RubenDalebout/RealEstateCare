import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //creating a web history with the base URL
    routes: [
        {
            path: '/', //when user navigates to the root path
            name: 'home', //name of the route
            component: HomeView //component to be rendered
        },
        {
            path: '/completed', //when user navigates to the /completed path
            name: 'completed', 
            component: () => import('../views/completed.vue') //lazy loading the component
        },
        {
            path: '/help', //when user navigates to the /help path
            name: 'help',
            component: () => import('../views/help.vue') //lazy loading the component
        },
        {
            path: '/knowledge-base', //when user navigates to the /knowledge-base path
            name: 'knowledge-base',
            component: () => import('../views/knowledge-base.vue') //lazy loading the component
        },
        {
            path: '/scheduled', //when user navigates to the /scheduled path
            name: 'scheduled',
            component: () => import('../views/scheduled.vue') //lazy loading the component
        },
        {
            path: '/search', //when user navigates to the /search path
            name: 'search',
            component: () => import('../views/search.vue') //lazy loading the component
        },
        {
            path: '/settings', //when user navigates to the /settings path
            name: 'settings',
            component: () => import('../views/settings.vue') //lazy loading the component
        },
        {
            path: '/login', //when user navigates to the /login path
            name: 'login',
            component: () => import('../views/login.vue') //lazy loading the component
        },
        {
            path: '/inspections/', //when user navigates to the /inspections path
            name: 'inspections',
            component: () => import('../views/inspections.vue'), //lazy loading the component
        },
        {
            path: '/inspection/', //when user navigates to the /inspection path
            name: 'inspection',
            component: () => import('../views/inspection.vue'), //lazy loading the component
        }
    ],
})

router.beforeEach((to, from, next) => {
    // check if the user is not trying to access the login page and if the user is not logged in
    if (to.name != 'login' && !localStorage.getItem('user')) {
        // redirect the user to the login page
        next({ name: 'login' })
    } else {
        // check if the user is trying to access the login page and if the user is already logged in
        if (to.name === 'login' && localStorage.getItem('user')) {
            // redirect the user to the home page
            next({name: 'home'});
        } else {
            // continue to the next route
            next();
        }
    }
})

export default router