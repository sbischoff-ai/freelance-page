import Vue from 'vue';
import Router from 'vue-router';
import i18n from './vue-i18n';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'aboutme',
            path: '/',
            redirect: () => '/' + i18n.locale + '/aboutme',
            children: []
        },
        {
            name: 'aboutme',
            path: '/aboutme',
            redirect: () => '/' + i18n.locale + '/aboutme',
            children: []
        },
        {
            name: 'services',
            path: '/services',
            redirect: () => '/' + i18n.locale + '/services',
            children: []
        },
        {
            name: 'blog',
            path: '/blog',
            redirect: () => '/' + i18n.locale + '/blog',
            children: []
        },
        {
            name: 'contact',
            path: '/contact',
            redirect: () => '/' + i18n.locale + '/contact',
            children: []
        },
        {
            name: 'aboutme',
            path: '/:lang/aboutme',
            component: () => import('../views/AboutMe'),
            children: []
        },
        {
            name: 'services',
            path: '/:lang/services',
            component: () => import('../views/Services'),
            children: []
        },
        {
            name: 'blog',
            path: '/:lang/blog',
            component: () => import('../views/Blog'),
            children: []
        },
        {
            name: 'contact',
            path: '/:lang/contact',
            component: () => import('../views/Contact'),
            children: []
        }
    ]
});
