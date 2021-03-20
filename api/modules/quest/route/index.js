import Controller from '../controller'
import Validate from '../validate'

export default [
  {
    method: 'POST',
    path: '/quest',
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
    path: '/quest',
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
    path: '/quests',
    handler: Controller.getItems
  },
  {
    method: 'GET',
    path: '/quest/{id}',
    handler: Controller.getItem
  },
  {
    method: 'DELETE',
    path: '/quest/{id}',
    handler: Controller.remove
  },
  {
    method: 'GET',
    path: '/quest/entities',
    handler: Controller.getEntities
  }
]
