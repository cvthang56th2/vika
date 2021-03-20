import Home from './components/Home.vue'
import About from './components/About.vue'

export default [
  {
    path: '/',
    name: 'home-page',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]