<template>
  <div class="main-layout">
    <Header />
    <TopNavigation />
    <section class="wrap-content">
      <router-view />
    </section>
    <Footer />
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
}
</style>