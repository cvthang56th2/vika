import Boom from 'boom'
import { login as loginUtil, logout as logoutUtil, checkToken as checkTokenUtil } from '../util'

const login = async request => {
  try {
    return await loginUtil(request.payload)
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const logout = async request => {
  try {
    return await logoutUtil(request.payload.token)
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const checkToken = async request => {
  try {
    return await checkTokenUtil(request.payload.token)
  } catch (error) {
    return Boom.badRequest(error)
  }
}

export default {
  login,
  logout,
  checkToken
}