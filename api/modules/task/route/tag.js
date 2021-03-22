import Controller from '../controller/tag'
import Validate from '../validate/tag'

export default [
  {
    method: 'POST',
    path: '/task-tag',
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
    path: '/task-tag',
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
    path: '/task-tags',
    handler: Controller.getItems
  },
  {
    method: 'GET',
    path: '/task-tag/{id}',
    handler: Controller.getItem
  },
  {
    method: 'DELETE',
    path: '/task-tag/{id}',
    handler: Controller.remove
  },
  {
    method: 'GET',
    path: '/task-tag/entities',
    handler: Controller.getEntities
  }
]
