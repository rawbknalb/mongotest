<template>
  <div class="">
    <h1>Login</h1>

      <md-input-container>
        <label>Email</label>
        <md-input placeholder="Please enter your Email" v-model="loginForm.email" ></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Password</label>
        <md-input placeholder="Please enter your Password" v-model="loginForm.password" type="password"></md-input>
      </md-input-container>

      <p v-if="error" class="error">Incorrect email or password</p>

      <md-button @click="login" class="md-raised md-primary">Login</md-button>

  </div>

</template>

<script>
import * as services from '../services'
import { getAuthState } from '../vuex/getters'
import { checkAuthState } from '../vuex/actions'

const initialLoginData = () => {
  return {
    loginForm: {
      email: '',
      password: null,
      test: false
    },
    error: false
  }
}

export default {
  name: 'Login',
  props: [],

  vuex: {
    getters: {
      authState: getAuthState
    },
    actions: {
      checkAuthState
    }
  },
  data: initialLoginData,
  methods: {
    login () {
      services.app.authenticate({
        type: 'local',
        'email': this.loginForm.email,
        'password': this.loginForm.password
      }).then(this.redirectAfterLogin).catch(this.loginError)
      this.checkAuthState()
    },
    redirectAfterLogin () {
      this.$router.replace(this.$route.query.redirect || '/')
    },
    loginError () {
      this.error = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
