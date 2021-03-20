import Boom from 'boom'
import { Quest } from '@models'

const save = async request => {
  try {
    const { payload } = request
    const questItem = await Quest.saveItem(payload)
    return { success: true, _id: questItem._id }
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItems = async (request, h) => {
  try {
    const questItems = await Quest.find({}).lean()
    return questItems
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItem = async (request, h) => {
  try {
    const questItem = await Quest.findById(request.params.id).lean()
    return questItem
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const remove = async (request, h) => {
  try {
    const result = await Quest.findByIdAndDelete(request.params.id)
    return result
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getEntities = async request => {
  try {
    const { query } = request
    const resp = {}
    if (query.questId) {
      const questObj = await Quest.findById({ _id: query.questId }).lean()
      if (!questObj) {
        return Boom.notFound('Quest not found.')
      }
      resp.questObj = questObj
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
