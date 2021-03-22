import List from './components/index.vue'
import ListTag from './components/tags/index.vue'

export default [
  {
    path: '/admin/tasks',
    name: 'admin-list-task',
    component: List,
    meta: {
      isAdmin: true
    }
  },
  {
    path: '/admin/task-tags',
    name: 'admin-list-task-tag',
    component: ListTag,
    meta: {
      isAdmin: true
    }
  }
]