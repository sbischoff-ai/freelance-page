import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
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
    ],
    scrollBehavior(to, from, savedPosition) { // eslint-disable-line no-unused-vars
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});
