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
        <router-link v-if="character.position > 0" :to="{ name: 'character_detail', params: { slug: previousHero.slug }}" class="btn btn-primary">Héro précédent</router-link>
        <router-link :to="{ name: 'homepage'}" class="btn btn-primary">Retour à la liste de héro</router-link>
        <router-link v-if="character.position < lastPosition" :to="{ name: 'character_detail', params: { slug: nextHero.slug }}" class="btn btn-primary">Héro suivant</router-link>
    </div>
</template>

<script type="text/babel">
    export default {
        computed: {
            character(){
                return this.$store.getters.getCharacters.filter(character => character.slug === this.$route.params.slug)[0]
            },
            lastPosition(){
                return this.$store.getters.getCharactersCount - 1
            },
            previousHero(){
                return this.$store.getters.getCharacters.filter(hero => hero.position === this.character.position - 1)[0]
            },
            nextHero(){
                return this.$store.getters.getCharacters.filter(hero => hero.position === this.character.position + 1)[0]
            }
        }
    }
</script>

<style lang="scss">
</style>
