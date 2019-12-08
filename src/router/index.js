import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/aboutme',
            children: []
        },
        {
            path: '/aboutme',
            component: () => import('../views/AboutMe'),
            children: []
        },
        {
            path: '/services',
            component: () => import('../views/Services'),
            children: []
        },
        {
            path: '/blog',
            component: () => import('../views/Blog'),
            children: []
        },
        {
            path: '/contact',
            component: () => import('../views/Contact'),
            children: []
        }
    ]
});
