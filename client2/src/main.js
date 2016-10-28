import Vue from 'vue'
import App from './App'
import router from './router'

// import Keen from 'keen-ui'
// import 'keen-ui/dist/keen-ui.css'
// Vue.use(Keen)

// Import Vuex + store
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)

// Material Design
import './assets/VueMaterialThemes'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
