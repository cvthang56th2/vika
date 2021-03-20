import Axios from 'axios'

const getItems = () => Axios.get(`${window.apiUrl}/quests`)

const getItem = (_id, params = {}) => Axios.get(`${window.apiUrl}/quest/${_id}`, {
  params
})

const saveItem = (payload) => {
  if (payload._id) {
    return Axios.put(`${window.apiUrl}/quest`, payload)
  }
  return Axios.post(`${window.apiUrl}/quest`, payload)
}

const getEntities = (params = {}) => Axios.get(`${window.apiUrl}/quest/entities`, {
  params
})

const remove = (_id) => Axios.delete(`${window.apiUrl}/quest/${_id}`)

export {
  getItems,
  getItem,
  saveItem,
  getEntities,
  remove
}
