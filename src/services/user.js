import Axios from 'axios'

const getItems = () => Axios.get(`${window.apiUrl}/users`)

const getItem = (_id, params = {}) => Axios.get(`${window.apiUrl}/user/${_id}`, {
  params
})

const saveItem = (payload) => {
  if (payload._id) {
    return Axios.put(`${window.apiUrl}/user`, payload)
  }
  return Axios.post(`${window.apiUrl}/user`, payload)
}

const getEntities = (params = {}) => Axios.get(`${window.apiUrl}/user/entities`, {
  params
})

const remove = (_id) => Axios.delete(`${window.apiUrl}/user/${_id}`)

export {
  getItems,
  getItem,
  saveItem,
  getEntities,
  remove
}
