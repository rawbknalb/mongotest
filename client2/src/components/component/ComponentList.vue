<template>
  <div class="ComponentList">

    <md-list class="md-double-line">
      <md-list-item v-for="component in components">
        <!-- <md-icon class="md-primary">phone</md-icon> -->

        <div class="md-list-text-container">
          <span>{{component.title}}</span>
          <span>{{component.description}}</span>
        </div>

      </md-list-item>
    </md-list>
  </div>
</template>

<script>
// import * as services from '../services'

export default {
  name: 'ComponentList',
  props: ['components'],
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.ComponentList {
  width: 50%;
}
</style>
