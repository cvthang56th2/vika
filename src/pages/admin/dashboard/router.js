import Dashboard from './components/index.vue'

export default [
  {
    path: '/admin',
    name: 'admin-home',
    component: Dashboard,
    meta: {
      isAdmin: true
    }
  }
]