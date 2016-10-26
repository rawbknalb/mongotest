import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// Import store
import store from './vuex/store'
// Use store
Vue.use(Vuex)

// Material Design
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
Vue.material.theme.registerAll({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  phone: {
    primary: 'indigo',
    accent: 'pink'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
