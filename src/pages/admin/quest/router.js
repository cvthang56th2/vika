import List from './components/index.vue'

export default [
  {
    path: '/admin/quests',
    name: 'admin-list-quest',
    component: List,
    meta: {
      isAdmin: true
    }
  }
]