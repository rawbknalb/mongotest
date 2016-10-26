<template>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',
  data () {
    return {}
  },
  mounted () {
    this.logoutUser
  },
  methods: {
    ...mapActions(['logoutUser'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
