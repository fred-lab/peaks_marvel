/**
 * Import Vuex
 */
import Vue from 'vue';
import Vuex from 'vuex'

/** Import Axios **/
import axios from 'axios'

Vue.use(Vuex)

/* store the data */
export const state = {
    characters: [],
    loader: true,
    index: 0,
    itemsPerPage: 5
}

/**
 * Getters to access to the state
 */
export const getters = {
    getCharactersForPagination: state => state.characters.slice(state.index, state.index + state.itemsPerPage),
    getCharacters: state => state.characters,
    getCharactersCount: state => state.characters.length,
    getLoader: state => state.loader,
    getItemsPerPage: state => state.itemsPerPage,
    getPreviousHero: (state, index) => {
        console.log('PreviousHero', index)
        return state.characters.filter(hero => hero.position === index - 1)
    }
}

/**
 * Mutation will modify the state property
 */
export const mutations = {
    SET_CHARACTERS(state, characters){
        state.characters = characters
    },
    SET_LOADER(state){
        state.loader = false
    },
    SET_INDEX (state, index){
        state.index = index
    }
}

/**
 * Action commit mutation
 */
export const actions = {
    /**
     * Get an Ajax request and set the list of all contacts
     */
    setCharacters({commit}){
        axios.get('api/marvel/characters').then(
            ({data}) => {
                data.forEach((hero, index) => {
                    hero['slug'] = slugify(hero.name)
                    hero['position'] = index
                })
                commit('SET_CHARACTERS', data)
                commit('SET_LOADER')
            }
        )
    },
    /**
     * Set the index for the pagination
     * @param commit
     * @param index
     */
    setIndex({commit}, index){
        commit('SET_INDEX', index)
    }
}

/**
 * Private methods
 */

/**
 * Slugify a name
 * @param name
 * @returns {string}
 * @private
 */
let slugify = (name)=>{
    return name.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
