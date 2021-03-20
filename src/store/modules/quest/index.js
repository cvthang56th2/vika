export default {
  namespaced: true,
  state: {
    item: null
  },
  mutations: {
    GET_ITEM (state, item) {
      state.item = item
    }
  },
  actions: {
    getItem (context) {
      context.commit('GET_ITEM', {})
    }
  },
  getters: {
    item: state => state.item
  }
}
