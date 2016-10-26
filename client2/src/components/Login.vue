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
import { mapGetters, mapActions } from 'vuex'

const initialLoginData = () => {
  return {
    loginForm: {
      email: '',
      password: null,
      test: false
    },
    error: false,
    login: true
  }
}

export default {
  name: 'Login',
  props: [],
  computed: mapGetters({
    components: 'fetchComponents',
    isLoggedIn: 'getAuthState'
  }),
  data: initialLoginData,
  methods: {
    ...mapActions(['loginUser']),
    login () {
      services.app.authenticate({
        type: 'local',
        'email': this.loginForm.email,
        'password': this.loginForm.password
      })
      // set store state loggedIn = true
      .then(this.loginUser)
      // redirect to root
      .then(this.redirectAfterLogin)
      // catch errors and use loginError method
      .catch(this.loginError)
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
