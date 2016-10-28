<template>
  <div class="app" id="app" v-md-theme="'default'">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navigation from './components/Navigation/Navigation.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Navigation
  },
  data () {
    return {
      loggedIn: !!window.localStorage.getItem('feathers-jwt')
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  /*padding: 10px;*/
}
</style>
