import List from './components/index.vue'
import Detail from './components/detail.vue'

export default [
  {
    path: '/quests',
    name: 'list-quest',
    component: List
  },
  {
    path: '/quest/:id',
    name: 'quest-detail',
    component: Detail
  }
]
