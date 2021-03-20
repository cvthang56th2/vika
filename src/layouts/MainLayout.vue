<template>
  <div class="main-layout">
    <Header class="flex-0-0" />
    <TopNavigation class="flex-0-0" />
    <section class="wrap-content flex-1-1 overflow-y-auto">
      <router-view />
    </section>
    <Footer class="flex-0-0" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TopNavigation from './components/TopNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    TopNavigation,
    Footer
  }  
}
</script>

<style lang="scss">
.main-layout {
  padding: 0 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>