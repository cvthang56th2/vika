import List from './components/index.vue'

export default [
  {
    path: '/admin/users',
    name: 'admin-list-user',
    component: List,
    meta: {
      isAdmin: true
    }
  }
]