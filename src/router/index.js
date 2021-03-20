import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRoutes from '../pages/admin/router'
import ClientRoutes from '../pages/client/router'

Vue.use(VueRouter)


const routes = [
  ...AdminRoutes,
  ...ClientRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
