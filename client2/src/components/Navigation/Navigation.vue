<template>
  <div class="">
    <h1 class="header">I'm a vue.js component</h1>

    <router-link v-if="loggedIn" to="/logout">
      <div class="column">Log out</div>
    </router-link>

    <router-link v-if="!loggedIn" to="/login">
      <div class="column">Login</div>
    </router-link>

    <router-link v-if="!loggedIn" to="/signup">
      <div class="column">Signup</div>
    </router-link>

    <router-link v-if="loggedIn" to="/posts">
      <div class="column">Posts</div>
    </router-link>

    <router-link v-if="loggedIn" to="/post">
      <div class="column">Add Post</div>
    </router-link>

    <router-link v-if="loggedIn" to="/sampledata">
      <div class="column">Create Random Post</div>
    </router-link>
  </div>
</template>

<script>
// import * as services from '../../services'

export default {
  name: 'Navigation',
  props: ['loggedIn'],
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
