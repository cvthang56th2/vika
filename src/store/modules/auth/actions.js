import { setCookie, getCookie } from '@/helpers'
import { login as loginSvc, logout as logoutSvc, checkToken as checkTokenSvc } from '@/services/auth'

export default {
  async login (context, payload) {
    const { data } = await loginSvc(payload)
    if (data.token) {
      setCookie(window.tokenKey, data.token)
    }
    context.commit('SET_AUTH', data.authUser)
  },
  async logout (context) {
    await logoutSvc(getCookie(window.tokenKey))
    setCookie(window.tokenKey, null, 0)
    context.commit('SET_AUTH', null)
  },
  async checkToken (context) {
    const { data} = await checkTokenSvc(getCookie(window.tokenKey))
    if (data.success) {
      context.commit('SET_AUTH', data.authUser)
    } else {
      setCookie(window.tokenKey, null, 0)
      context.commit('SET_AUTH', null)
    }
  }
}