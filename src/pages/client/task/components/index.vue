<template>
  <div>
    <h1>
      LIST Task
    </h1>
    <div v-for="(item, index) in list" :key="`task-${index}`">
      <h5 class="pointer" @click="goTo({ name: 'task-detail', params: { id: item._id } }, true)">{{ item.name }}</h5>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { getItems } from '@/services/task.js'

export default {
  name: 'ListTask',
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