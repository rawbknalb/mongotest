<template>

  <div class="">

    <router-link v-if="isLoggedIn" to="/logout">
      <!-- click on Log out triggers isLoggedIn = fale in store  -->
      <div @click="logout" class="column">Log out</div>
    </router-link>

    <router-link v-if="!isLoggedIn" to="/login">
      <div class="column">Login</div>
    </router-link>

    <router-link v-if="!isLoggedIn" to="/signup">
      <div class="column">Signup</div>
    </router-link>

    <router-link v-if="isLoggedIn" to="/posts">
      <div class="column">Posts</div>
    </router-link>

    <router-link v-if="isLoggedIn" to="/post">
      <div class="column">Add Post</div>
    </router-link>

    <router-link v-if="isLoggedIn" to="/sampledata">
      <div class="column">Create Random Post</div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as services from '../../services'

export default {
  name: 'Navigation',
  computed: mapGetters({
    isLoggedIn: 'getAuthState'
  }),
  methods: {
    ...mapActions(['logoutUser']),

    logout () {
      services.app.logout().then(this.logoutUser).then(this.redirectAfterlogout)
    },

    redirectAfterlogout () {
      this.$router.replace(this.$route.query.redirect || '/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
