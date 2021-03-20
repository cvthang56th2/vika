<template>
  <AppPopup :value="value" @input="hide">
    <h4>Popup Detail Quest</h4>
    <h3>{{ questId ? 'Edit' : 'Add' }} Quest</h3>

    <div>
      <div>
        <label for="name">name</label>
        <input v-model="formData.name" id="name" type="text" placeholder="name">
      </div>
      <div>
        <label for="description">description</label>
        <textarea v-model="formData.description" id="description" type="text" placeholder="description" />
      </div>
    </div>
    <template slot="buttons">
      <button @click="save">save</button>
    </template>
  </AppPopup>
</template>

<script>
import { saveItem, getEntities } from '@/services/quest'

export default {
  name: 'PopupDetailQuest',
  props: {
    value: {
      type: Boolean
    },
    questId: {
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
        const { data } = await getEntities({ questId: this.questId })
        if (data.questObj) {
          this.formData = data.questObj
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