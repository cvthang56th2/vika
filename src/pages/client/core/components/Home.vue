<template>
  <div class="home">
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  components: {
  },
  computed: {
    ...mapGetters({
      quest: 'quest/item'
    })
  },
  created () {
    this.$store.dispatch('quest/getItem', {})
  },
  methods: {
  }
}
</script>
