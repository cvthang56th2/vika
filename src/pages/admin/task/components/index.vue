<template>
  <div>
    <h1>List Task</h1>
    <button @click="showPopupDetail = true">Add new</button>
    <div class="d-flex">
      <div class="mr-1">name</div>
      <div>des</div>
    </div>
    <div v-for="(item, index) in list" :key="`task-${index}`" class="d-flex">
      <div class="mr-1">{{ item.name || '' }}</div>
      <div class="mr-1">{{ item.description || '' }}</div>
      <button class="mr-1" @click="editItem(item._id)">Edit</button>
      <button @click="removeItem(item._id)">Remove</button>
    </div>
    <PopupDetail v-model="showPopupDetail" :taskId="taskId || ''" @saved="fetchData" />
  </div>
</template>

<script>
import PopupDetail from './popup.detail'
import { getItems, remove as removeSvc } from '@/services/task.js'

export default {
  name: 'AdminListTask',
  components: {
    PopupDetail
  },
  data: () => ({
    list: [],
    showPopupDetail: false,
    taskId: null
  }),
  watch: {
    showPopupDetail (v) {
      if (!v) {
        this.taskId = null
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async removeItem (_id) {
      this.setLoading()
      try {
        await removeSvc(_id)
        this.successNotify({ title: 'Task', message: 'Remove successfully!' })
        this.fetchData()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    },
    editItem (_id) {
      this.taskId = _id
      this.showPopupDetail = true
    },
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