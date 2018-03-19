<template>
    <div>
        <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="Image du héro">
        <div class="list-group">
            <h3>Fiche détaillé du Héro:</h3>
            <div class="list-group">
                <p class="list-group-item">Nom : {{ character.name }}</p>
                <p class="list-group-item">Description : {{ character.description }}</p>
                <p class="list-group-item">Présent dans {{ character.comics.available}} comics</p>
                <div class="list-group">
                    <h4>Titres des 3 premiers comics où il apparait :</h4>
                    <p class="list-group-item" v-for="comic in character.comics.items.slice(0,3)">{{ comic.name}}</p>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'homepage'}" class="btn btn-primary">Retour à la liste de héro</router-link>
    </div>
</template>

<script type="text/babel">
    export default {
        computed: {
            character(){
                return this.$store.getters.getCharacters.filter(character => character.slug === this.$route.params.slug)[0]
            }
        }
    }
</script>

<style lang="scss">
</style>
