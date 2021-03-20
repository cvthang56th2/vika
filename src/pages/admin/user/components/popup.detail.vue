<template>
  <AppPopup :value="value" @input="hide">
    <h4>Popup Detail User</h4>
    <h3>{{ userId ? 'Edit' : 'Add' }} User</h3>

    <div>
      <div>
        <label for="name">name</label>
        <input v-model="formData.name" id="name" type="text" placeholder="name">
      </div>
      <div>
        <label for="userName">userName</label>
        <input v-model="formData.userName" :disabled="!!userId" id="userName" type="text" placeholder="userName">
      </div>
      <div>
        <!-- TODO: encrypt -->
        <label for="password">password</label>
        <input v-model="formData.password" id="password" type="password" placeholder="password" />
      </div>
    </div>
    <template slot="buttons">
      <button @click="save">save</button>
    </template>
  </AppPopup>
</template>

<script>
import { saveItem, getEntities } from '@/services/user'

export default {
  name: 'PopupDetailUser',
  props: {
    value: {
      type: Boolean
    },
    userId: {
      type: String
    }
  },
  data: () => ({
    formData: {}
  }),
  watch: {
    value (v) {
      if (v) {
        this.formData = {}
        this.fetchData()
      }
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    async fetchData () {
      this.setLoading()
      try {
        const { data } = await getEntities({ userId: this.userId })
        if (data.userObj) {
          this.formData = data.userObj
        }
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    },
    async save () {
      this.setLoading()
      try {
        const { data } = await saveItem(this.formData)
        this.$emit('saved', data)
        this.hide()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>