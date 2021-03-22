import Axios from 'axios'

const getItems = () => Axios.get(`${window.apiUrl}/task-tags`)

const getItem = (_id, params = {}) => Axios.get(`${window.apiUrl}/task-tag/${_id}`, {
  params
})

const saveItem = (payload) => {
  if (payload._id) {
    return Axios.put(`${window.apiUrl}/task-tag`, payload)
  }
  return Axios.post(`${window.apiUrl}/task-tag`, payload)
}

const getEntities = (params = {}) => Axios.get(`${window.apiUrl}/task-tag/entities`, {
  params
})

const remove = (_id) => Axios.delete(`${window.apiUrl}/task-tag/${_id}`)

export {
  getItems,
  getItem,
  saveItem,
  getEntities,
  remove
}
