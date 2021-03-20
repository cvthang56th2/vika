<template>
  <div>
    <h1>List User</h1>
    <button @click="showPopupDetail = true">Add new</button>
    <div class="d-flex">
      <div class="mr-1">name</div>
      <div>des</div>
    </div>
    <div v-for="(item, index) in list" :key="`user-${index}`" class="d-flex">
      <div class="mr-1">{{ item.name || '' }}</div>
      <div class="mr-1">{{ item.description || '' }}</div>
      <button class="mr-1" @click="editItem(item._id)">Edit</button>
      <button @click="removeItem(item._id)">Remove</button>
    </div>
    <PopupDetail v-model="showPopupDetail" :userId="userId || ''" @saved="fetchData" />
  </div>
</template>

<script>
import PopupDetail from './popup.detail'
import { getItems, remove as removeSvc } from '@/services/user.js'

export default {
  name: 'AdminListUser',
  components: {
    PopupDetail
  },
  data: () => ({
    list: [],
    showPopupDetail: false,
    userId: null
  }),
  watch: {
    showPopupDetail (v) {
      if (!v) {
        this.userId = null
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
        this.successNotify({ title: 'User', message: 'Remove successfully!' })
        this.fetchData()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    },
    editItem (_id) {
      this.userId = _id
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