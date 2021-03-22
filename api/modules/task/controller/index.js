import { get } from 'lodash'
import Boom from 'boom'

import { Task } from '@models'
import { taskTags } from '@global/options/task.js'
import { sortCallBack, ensureArray } from '@global/helpers/general.js'

const save = async request => {
  try {
    const { payload } = request
    let taskItem
    if (payload._id) {
      const taskObj = await Task
        .findOne({ _id: payload._id, status: { $ne: 'archived' } })
        .select('_id status')
        .lean()
      if (!taskObj) {
        return Boom.notFound('Task not found.')
      }
      taskItem = await Task.findByIdAndUpdate(payload._id, { $set: payload })
    } else {
      taskItem = await Task.saveItem(payload)
    }
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

const getListTask = async (request, h) => {
  try {
    const taskItems = await Task.find({}).lean()
    return taskTags.map(taskTagObj => ({
      ...taskTagObj,
      items: taskItems.filter(taskObj => taskObj.tag === taskTagObj.value).sort(sortCallBack('rank', true, 'number'))
    }))
    .sort(sortCallBack('order', true, 'number'))
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
  getListTask,
  getItem,
  remove,
  getEntities
}
