import DashboardRouters from './dashboard/router'
import QuestRouters from './quest/router'
import UserRouters from './user/router'

export default [
  ...DashboardRouters,
  ...QuestRouters,
  ...UserRouters
]