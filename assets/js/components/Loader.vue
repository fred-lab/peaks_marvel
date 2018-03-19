<template>
    <div v-if="loader">
        <div class="wrapper">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        computed:{
            loader(){
                return this.$store.getters.getLoader
            }
        }
    }
</script>

<style lang="scss">
    .loader{
        position: fixed;
        z-index: 999;
        top:50%;
        left:50%;
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

</style>