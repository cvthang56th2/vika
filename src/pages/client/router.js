import CoreRoutes from './core/router'
import QuestRoutes from './quest/router'
import TaskRoutes from './task/router'

export default [
  ...CoreRoutes,
  ...QuestRoutes,
  ...TaskRoutes
]