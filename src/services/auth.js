import Axios from 'axios'

const login = (payload) => Axios.post(`${window.apiUrl}/login`, payload)

const logout = (token) => Axios.post(`${window.apiUrl}/logout`, {token})

const checkToken = (token) => Axios.post(`${window.apiUrl}/check-token`, {token})

const register = (payload) => Axios.post(`${window.apiUrl}/register`, payload)

export {
  login,
  logout,
  checkToken,
  register
}