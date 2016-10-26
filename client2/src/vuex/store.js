import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import components from './modules/components'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    components,
    auth
  },
  strict: debug
})
