import Controller from '../controller'
import Validate from '../validate'

export default [
  {
    method: 'POST',
    path: '/register',
    options: {
    },
    handler: Controller.register
  },
  {
    method: 'POST',
    path: '/user',
    options: {
      validate: {
        // payload: {
        //     firstname: Joi.string().required(),
        //     lastname: Joi.string().required()
        // },
        // failAction: (request, h, error) => {
        //     return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
        // }
      }
    },
    handler: Controller.save
  },
  {
    method: 'PUT',
    path: '/user',
    options: {
      validate: {
        // payload: {
        //     firstname: Joi.string().optional(),
        //     lastname: Joi.string().optional()
        // },
        // failAction: (request, h, error) => {
        //     return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
        // }
      }
    },
    handler: Controller.save
  },
  {
    method: 'GET',
    path: '/users',
    handler: Controller.getItems
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: Controller.getItem
  },
  {
    method: 'DELETE',
    path: '/user/{id}',
    handler: Controller.remove
  },
  {
    method: 'GET',
    path: '/user/entities',
    handler: Controller.getEntities
  }
]
