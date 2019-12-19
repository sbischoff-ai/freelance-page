import Vue from 'vue';
import Router from 'vue-router';
import i18n from './vue-i18n';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: () => '/' + i18n.locale + '/',
            children: []
        },
        {
            path: '/:lang/',
            redirect: () => '/' + i18n.locale + '/aboutme',
            children: []
        },
        {
            path: '/aboutme',
            redirect: () => '/' + i18n.locale + '/aboutme',
            children: []
        },
        {
            path: '/services',
            redirect: () => '/' + i18n.locale + '/services',
            children: []
        },
        {
            path: '/blog',
            redirect: () => '/' + i18n.locale + '/blog',
            children: []
        },
        {
            path: '/contact',
            redirect: () => '/' + i18n.locale + '/contact',
            children: []
        },
        {
            path: '/:lang/aboutme',
            component: () => import('../views/AboutMe'),
            children: []
        },
        {
            path: '/:lang/services',
            component: () => import('../views/Services'),
            children: []
        },
        {
            path: '/:lang/blog',
            component: () => import('../views/Blog'),
            children: []
        },
        {
            path: '/:lang/contact',
            component: () => import('../views/Contact'),
            children: []
        }
    ]
});
