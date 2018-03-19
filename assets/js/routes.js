/**
 * Import Vue-Router
 */
import VueRouter from 'vue-router';

import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
    /** Homepage **/
    {
        path: '/',
        name: 'homepage',
        component: require('./components/Homepage.vue').default
    },
    /** Character detail **/
    {
        path: '/hero/:slug',
        name: 'character_detail',
        component: require('./components/Character-detail.vue').default,
        prop: true
    },
    /** Redirect to homepage **/
    {
        path: '*',
        redirect: '/'
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});