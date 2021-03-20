import Boom from 'boom'
import { Task } from '@models'

const save = async request => {
  try {
    const { payload } = request
    const taskItem = await Task.saveItem(payload)
    return { success: true, _id: taskItem._id }
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItems = async (request, h) => {
  try {
    const taskItems = await Task.find({}).lean()
    return taskItems
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItem = async (request, h) => {
  try {
    const taskItem = await Task.findById(request.params.id).lean()
    return taskItem
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const remove = async (request, h) => {
  try {
    const result = await Task.findByIdAndDelete(request.params.id)
    return result
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getEntities = async request => {
  try {
    const { query } = request
    const resp = {}
    if (query.taskId) {
      const taskObj = await Task.findById({ _id: query.taskId }).lean()
      if (!taskObj) {
        return Boom.notFound('Task not found.')
      }
      resp.taskObj = taskObj
    }
    return resp
  } catch (error) {
    return Boom.badRequest(error)
  } 
}

export default {
  save,
  getItems,
  getItem,
  remove,
  getEntities
}
