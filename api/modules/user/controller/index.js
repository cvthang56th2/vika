import Boom from 'boom'
import { User } from '@models'


const register = async request => {
  try {
    const { payload } = request
    // save the user to database
    const savedUser = await User.create(payload)
    return { success: true, user: savedUser }
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const save = async request => {
  try {
    const { payload } = request
    const userItem = await User.saveItem(payload)
    console.log('userItem', userItem)
    return { success: true, _id: userItem._id }
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItems = async (request, h) => {
  try {
    const userItems = await User.find({}).lean()
    return userItems
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getItem = async (request, h) => {
  try {
    const userItem = await User.findById(request.params.id).lean()
    return userItem
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const remove = async (request, h) => {
  try {
    const result = await User.findByIdAndDelete(request.params.id)
    return result
  } catch (error) {
    return Boom.badRequest(error)
  }
}

const getEntities = async request => {
  try {
    const { query } = request
    const resp = {}
    if (query.userId) {
      const userObj = await User.findById({ _id: query.userId }).lean()
      if (!userObj) {
        return Boom.notFound('User not found.')
      }
      resp.userObj = userObj
    }
    return resp
  } catch (error) {
    return Boom.badRequest(error)
  } 
}

export default {
  register,
  save,
  getItems,
  getItem,
  remove,
  getEntities
}
