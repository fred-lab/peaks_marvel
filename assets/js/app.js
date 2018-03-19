import Vue from 'vue';
window.Vue = Vue;

/* Import Store */
import store from './store.js';

/* Initializing Vue */
const app = new Vue({
    el: '#app',
    store,
    // router,
    created(){
        console.log('Fetch Data')
        this.$store.dispatch('setCharacters')
    },
    mounted () {
        console.log('App is ready')
    }
});