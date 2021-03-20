<template>
  <AppPopup :value="value" @input="hide">
    <h4>Authentication</h4>
    <h3>Login</h3>

    <form>
      <div>
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
    </form>
    <div>
      <a @click="showPopupRegister = true">register</a>
    </div>

    <template slot="buttons">
      <button @click="login">login</button>
    </template>
    <PopupRegister v-model="showPopupRegister" @saved="onRegisterSuccess" />
  </AppPopup>
</template>

<script>
import PopupRegister from './popup.register.vue'

export default {
  name: 'PopupLogin',
  components: {
    PopupRegister
  },
  props: {
    value: {
      required: true
    }
  },
  data: () => ({
    formData: {},
    showPopupRegister: false
  }),
  watch: {
    value (v) {
      if (v) {
        this.formData = {}
      }
    }
  },
  methods: {
    onRegisterSuccess (data) {
      // this.login(data)
      console.log(data)
    },
    hide () {
      this.$emit('input', false)
    },
    async login () {
      this.setLoading()
      try {
        await this.$store.dispatch('auth/login', this.formData)
        this.successNotify({ message: 'Login successfully!' })
        this.hide()
      } catch (error) {
        this.errorNotify(error)
      }
      this.setLoading(false)
    }
  }
}
</script>