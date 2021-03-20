<template>
  <div>
    <a @click="goTo({ name: 'list-quest' })">Back to list quest</a>
    <h2>{{ questItem.name }}</h2>
    <p>
      {{ questItem.description }}
    </p>
  </div>
</template>

<script>
import { getItem } from '@/services/quest'

export default {
  name: 'DetailQuest',
  data: () => ({
    questItem: {}
  }),
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getItem(this.$route.params.id)
        this.questItem = data || {}
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>