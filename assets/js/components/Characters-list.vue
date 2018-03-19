<template>
    <div class="list-group">
        <router-link v-for="character in characters"
                     :key="character.id"
                     :to="{ name: 'character_detail', params: { slug: character.slug }}"
                     class="list-group-item list-group-item-action">
            {{ character.name }}
        </router-link>
        <pagination></pagination>
    </div>
</template>

<script type="text/babel">
    export default {
        computed:{
            characters(){
                return this.$store.getters.getCharactersForPagination
            }
        }
    }
</script>

<style lang="scss">
</style>