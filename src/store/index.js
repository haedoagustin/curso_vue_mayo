import Vue from 'vue'
import Vuex from 'vuex'
import apiService from '@/services/apiService'
import peopleService from '@/services/peopleService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        api_list: [],
        loading: false,
        people: []
    },
    mutations: {
        ENABLE_LOADING(state) {
            state.loading = true
        },
        DISABLE_LOADING(state) {
            state.loading = false
        },
        SET_API_LIST(state, list) {
            state.api_list = list
        },
        SET_PEOPLE(state, list) {
            state.people = list
        },
        ADD_PEOPLE(state, person) {
            state.people.push(person)
        }
    },
    actions: {
        async load_api_list({commit}) {
            commit('ENABLE_LOADING')
            let list = await apiService.getAmountOfApiList(5)
            commit('SET_API_LIST', list)
            commit('DISABLE_LOADING')
        },
        async load_people({commit}) {
            commit('ENABLE_LOADING')
            let list = await peopleService.getPeople()
            commit('SET_PEOPLE', list)
            commit('DISABLE_LOADING')
        },
        async store_people({commit}, obj) {
            commit('ENABLE_LOADING')
            let person = await peopleService.pushPeople(obj)
            commit('ADD_PEOPLE', person)
            commit('DISABLE_LOADING')
        }        
    }
})
