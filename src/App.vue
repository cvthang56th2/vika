<template>
  <div id="app">
    <div v-if="isLoading" class="wrap-loading">Loading....</div>
    <AdminLayout v-if="isAdmin" />
    <MainLayout v-else />

    <notifications position="bottom right" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainLayout from './layouts/MainLayout.vue'
import AdminLayout from './layouts/AdminLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    AdminLayout
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    }),
    isAdmin () {
      return !!this.$route.meta.isAdmin
    }
  },
  async created () {
    this.$store.dispatch('auth/checkToken')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  .wrap-loading {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    z-index: 9999;
  }
}
</style>
