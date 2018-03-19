import Vue from 'vue';
window.Vue = Vue;

/* Import Store */
import store from './store.js';

/* Import Router */
import router from './routes.js';

/* Add web component */
Vue.component('marvel-app', require('./components/MarvelApp.vue').default);
Vue.component('breadcrumb', require('./components/Beadcrumb.vue').default);
Vue.component('loader', require('./components/Loader.vue').default);
Vue.component('homepage', require('./components/Homepage.vue').default);
Vue.component('characters-list', require('./components/Characters-list.vue').default);
Vue.component('character-detail', require('./components/Character-detail.vue').default);
Vue.component('pagination', require('./components/Pagination.vue').default);

/* Initializing Vue */
const app = new Vue({
    el: '#app',
    store,
    router,
    created(){
        console.log('Fetch Data')
        this.$store.dispatch('setCharacters')
    },
    mounted () {
        console.log('App is ready')
    }
});