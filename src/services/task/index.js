import Axios from 'axios'

const getItems = () => Axios.get(`${window.apiUrl}/tasks`)

const getListTask = (params) => Axios.get(`${window.apiUrl}/list-tasks`, {
  params
})

const getItem = (_id, params = {}) => Axios.get(`${window.apiUrl}/task/${_id}`, {
  params
})

const saveItem = (payload) => {
  if (payload._id) {
    return Axios.put(`${window.apiUrl}/task`, payload)
  }
  return Axios.post(`${window.apiUrl}/task`, payload)
}

const getEntities = (params = {}) => Axios.get(`${window.apiUrl}/task/entities`, {
  params
})

const remove = (_id) => Axios.delete(`${window.apiUrl}/task/${_id}`)

export {
  getItems,
  getListTask,
  getItem,
  saveItem,
  getEntities,
  remove
}
