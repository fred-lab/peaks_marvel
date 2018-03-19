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
    characters: []
}

/**
 * Getters to access to the state
 */
export const getters = {
    getCharacters: state => state.characters
}

/**
 * Mutation will modify the state property
 */
export const mutations = {
    SET_CHARACTERS(state, characters){
        state.characters = characters
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
                commit('SET_CHARACTERS', data)
            }
        )
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
