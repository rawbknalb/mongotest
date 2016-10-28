import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// Import store
import store from './vuex/store'
// Use store
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
