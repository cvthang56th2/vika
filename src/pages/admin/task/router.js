import List from './components/index.vue'

export default [
  {
    path: '/admin/tasks',
    name: 'admin-list-task',
    component: List,
    meta: {
      isAdmin: true
    }
  }
]