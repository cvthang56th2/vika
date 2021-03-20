<template>
  <div>
    <a @click="goTo({ name: 'list-task' })">Back to list task</a>
    <h2>{{ taskItem.name }}</h2>
    <p>
      {{ taskItem.description }}
    </p>
  </div>
</template>

<script>
import { getItem } from '@/services/task'

export default {
  name: 'DetailTask',
  data: () => ({
    taskItem: {}
  }),
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getItem(this.$route.params.id)
        this.taskItem = data || {}
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>