<template>
    <div class="homepage">
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Liste des héros Marvel</h1>
                <p class="text-muted">Cette application vous permet d'afficher une liste de héro Marvel !</p>
            </div>
        </div>
        <div class="row text-center placeholder">
            <div class="col-md-6">
                <h2>Listes des héros <span class="badge badge-pill badge-info">{{ nbCharacters }}</span></h2>
                <characters-list></characters-list>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        computed:{
            nbCharacters(){
                return this.$store.getters.getCharactersCount
            }
        }
    }
</script>

<style lang="scss">
    .homepage{
        margin: 1em 0em 6em;
    }
</style>