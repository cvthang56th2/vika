import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    authUser: null
  },
  mutations,
  actions,
  getters: {
    authUser: state => state.authUser
  }
}
