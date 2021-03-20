import questRoutes from './quest/route'
import authRoutes from './auth/route'
import userRoutes from './user/route'
import taskRoutes from './task/route'

module.exports = [
  ...questRoutes,
  ...authRoutes,
  ...userRoutes,
  ...taskRoutes
]
