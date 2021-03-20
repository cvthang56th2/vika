import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppPlugin from './plugins/appPlugin'
import Notifications from 'vue-notification'
import './assets/css/helpers.scss'
 
window.apiUrl = 'http://localhost:4000'
window.tokenKey = 'app-token'

Vue.config.productionTip = false

Vue.use(AppPlugin)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
