import Vue from 'vue'
import Vuex from 'vuex'
import QuestStore from './modules/quest'
import AuthStore from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING (state, value) {
      state.isLoading = value
    }
  },
  actions: {
    setLoading (context, value = true) {
      context.commit('SET_LOADING', value)
    }
  },
  getters: {
    isLoading: state => state.isLoading
  },
  modules: {
    quest: QuestStore,
    auth: AuthStore
  }
})
