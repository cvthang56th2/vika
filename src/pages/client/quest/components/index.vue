<template>
  <div>
    <h1>
      LIST QUEST
    </h1>
    <div v-for="(item, index) in list" :key="`quest-${index}`">
      <h5 class="pointer" @click="goTo({ name: 'quest-detail', params: { id: item._id } }, true)">{{ item.name }}</h5>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { getItems } from '@/services/quest.js'

export default {
  name: 'ListQuest',
  data: () => ({
    list: []
  }),
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getItems()
        this.list = data || []
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>