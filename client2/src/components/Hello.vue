<template>
  <div class="hello">
    Test
  </div>
</template>

<script>
import * as services from '../services'

const initialData = () => {
  return {
    component: {
      title: '',
      description: ''
    },
    components: []
  }
}

export default {
  name: 'hello',
  data: initialData,
  mounted () {
    services.componentService.find({}).then(components => { this.components = components.data })
  },
  methods: {
    addComponent () {
      services.componentService.create({
        title: this.component.title,
        description: this.component.description
      })
      .then(this.components.push(this.component))
      .then(this.resetComponent)
    },
    resetComponent () {
      this.component = initialData().component
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
