import Controller from '../controller'
import Validate from '../validate'

export default [
  {
    method: 'POST',
    path: '/task',
    options: {
      validate: {
        // payload: {
        //     firstname: Joi.string().required(),
        //     lastname: Joi.string().required()
        // },
        // failAction: (retask, h, error) => {
        //     return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
        // }
      }
    },
    handler: Controller.save
  },
  {
    method: 'PUT',
    path: '/task',
    options: {
      validate: {
        // payload: {
        //     firstname: Joi.string().optional(),
        //     lastname: Joi.string().optional()
        // },
        // failAction: (retask, h, error) => {
        //     return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
        // }
      }
    },
    handler: Controller.save
  },
  {
    method: 'GET',
    path: '/tasks',
    handler: Controller.getItems
  },
  {
    method: 'GET',
    path: '/task/{id}',
    handler: Controller.getItem
  },
  {
    method: 'DELETE',
    path: '/task/{id}',
    handler: Controller.remove
  },
  {
    method: 'GET',
    path: '/task/entities',
    handler: Controller.getEntities
  }
]
