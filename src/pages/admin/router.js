import DashboardRouters from './dashboard/router'
import QuestRouters from './quest/router'
import UserRouters from './user/router'
import TaskRouters from './task/router'

export default [
  ...DashboardRouters,
  ...QuestRouters,
  ...UserRouters,
  ...TaskRouters
]