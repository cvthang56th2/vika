import List from './components/index.vue'
import Detail from './components/detail.vue'

export default [
  {
    path: '/tasks',
    name: 'list-task',
    component: List
  },
  {
    path: '/task/:id',
    name: 'task-detail',
    component: Detail
  }
]
