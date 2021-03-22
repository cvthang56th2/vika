import Boom from 'boom'
import { TaskTag } from '@models'

const save = async request => {
  try {
    const { payload } = request
    const taskTagItem = await TaskTag.saveItem(payload)
    return { success: true, _id: taskTagItem._id }
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItems = async (request, h) => {
  try {
    const taskTagItems = await TaskTag.find({}).lean()
    return taskTagItems
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItem = async (request, h) => {
  try {
    const taskTagItem = await TaskTag.findById(request.params.id).lean()
    return taskTagItem
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const remove = async (request, h) => {
  try {
    const result = await TaskTag.findByIdAndDelete(request.params.id)
    return result
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getEntities = async request => {
  try {
    const { query } = request
    const resp = {}
    if (query.taskTagId) {
      const taskTagObj = await TaskTag.findById({ _id: query.taskTagId }).lean()
      if (!taskTagObj) {
        return Boom.notFound('TaskTag not found.')
      }
      resp.taskTagObj = taskTagObj
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
