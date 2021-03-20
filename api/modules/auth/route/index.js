import Controller from '../controller'
import Validate from '../validate'

export default [
  {
    method: 'POST',
    path: '/login',
    options: {
    },
    handler: Controller.login
  },
  {
    method: 'POST',
    path: '/logout',
    options: {
      // auth: 'jwt',
    },
    handler: Controller.logout
  },
  {
    method: 'POST',
    path: '/check-token',
    options: {
      // auth: 'jwt',
    },
    handler: Controller.checkToken
  }
]
