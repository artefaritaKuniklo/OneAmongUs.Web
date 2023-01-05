import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from "@/views/Profile.vue";
import EditInfo from "@/views/EditInfo.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
    },
    {
        path: '/profile/:userid',
        name: 'Profile',
        component: Profile,
        props: true
    },
    {
        path: '/edit-info/:userid',
        name: 'EditInfo',
        component: EditInfo,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes

    // @ts-ignore Automatically scroll to top
    // scrollBehavior: (to, from, savedPosition) => {
    //     if (savedPosition) return savedPosition
    //     else if (to.hash) return {selector: to.hash}
    //     else return {x: 0, y: 0}
    // }
})


export default { router, routes }
