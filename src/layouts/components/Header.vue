<template>
  <header class="wrap-header d-flex justify-space-between">
    <div class="d-flex">
      <div class="logo mr-1">Logo</div>
      <input class="mr-1" type="text" placeholder="Search">
    </div>
    <div class="d-flex">
      <button class="mr-1">Random Quiz</button>
      <button class="mr-1">Remove Ads!</button>
      <button class="mr-1">Join for Free</button>
      <template  v-if="authUser">
        <button @click="goTo({ name: 'admin-home' })" class="mr-1">Admin</button>
        <span>{{ authUser.userName }}</span>
        <button @click="logout">Logout</button>
      </template>
      <button v-else @click="showPopupLogin = true">Login</button>
    </div>

    <PopupLogin v-model="showPopupLogin" />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import PopupLogin from './popups/popup.login.vue'

export default {
  name: 'MainHeader',
  components: {
    PopupLogin
  },
  data: () => ({
    showPopupLogin: false
  }),
  computed: {
    ...mapGetters({
      authUser: 'auth/authUser'
    })
  },
  methods: {
    async logout () {
      this.setLoading()
      try {
        await this.$store.dispatch('auth/logout', this.formData)
        this.successNotify({ message: 'Logout successfully!' })
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>

<style lang="scss">
  .wrap-header {
  }
</style>