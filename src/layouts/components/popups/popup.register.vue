<template>
  <AppPopup :value="value" @input="hide">
    <h4>Authentication</h4>
    <h3>Register</h3>

    <div>
      <div>
        <label for="name">name</label>
        <input v-model="formData.name" id="name" type="text" placeholder="name">
      </div>
      <div>
        <label for="userName">userName</label>
        <input v-model="formData.userName" id="userName" type="text" placeholder="userName">
      </div>
      <div>
        <!-- TODO: encrypt -->
        <label for="password">password</label>
        <input v-model="formData.password" id="password" type="password" placeholder="password" />
      </div>
    </div>
    <template slot="buttons">
      <button @click="register">register</button>
    </template>
  </AppPopup>
</template>

<script>
import { register as registerSvc } from '@/services/auth'

export default {
  name: 'PopupRegister',
  props: {
    value: {
      required: true
    }
  },
  data: () => ({
    formData: {}
  }),
  watch: {
    value (v) {
      if (v) {
        this.formData = {}
      }
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    async register () {
      this.setLoading()
      try {
        const { data } = await registerSvc(this.formData)
        console.log('data', data)
        // TODO: login bằng data này
        this.$emit('saved', data)
        this.successNotify({ message: 'Register successfully!' })
        this.hide()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>