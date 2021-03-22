import AppPopup from './components/app-popup.vue'
import * as Helpers from '@/helpers'

export default {
  install(Vue) {
    Vue.component(AppPopup.name, AppPopup)
    Vue.prototype._helpers = Helpers

    Vue.mixin({
      data: () => ({}),

      methods: Object.assign({
        successNotify (options = {}) {
          const { title = 'Success!', message = 'Successfully!' } = options
          this.$notify({
            type: 'success',
            title,
            text: message
          })
        },
        warningNotify (options = {}) {
          const { title = 'Warning!', message = 'Something danger!' } = options
          this.$notify({
            type: 'warn',
            title: title,
            text: message
          })
        },
        errorNotify (error) {
          this.$notify({
            type: 'error',
            title: 'Error!',
            text: (error && error.message) || error
          })
        },
        goTo(route, newTab) {
          if (newTab === true || (newTab instanceof MouseEvent && newTab.ctrlKey) || (newTab instanceof MouseEvent && newTab.type === 'mouseup' && newTab.which === 2)) {
            const routeData = this.$router.resolve(route)
            return window.open(routeData.href, '_blank')
          } else if (route.name !== this.$route.name) {
            this.$router.push(route)
          }
        },
        setLoading (value = true) {
          this.$store.dispatch('setLoading', value)
        }
      })
    })
  }
}
