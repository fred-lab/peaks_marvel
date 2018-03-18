import Vue from 'vue';
window.Vue = Vue;

/* Initializing Vue */
const app = new Vue({
    el: '#app',
    // store,
    // router,
    // created(){
    //     console.log('Fetch Data')
    //     this.$store.dispatch('setMedias')
    // },
    mounted () {
        console.log('App is ready')
    }
});