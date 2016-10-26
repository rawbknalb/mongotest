import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'

Vue.use(Vuex)

const state = {
  components: [],
  loggedIn: false
}

const mutations = {
  FETCH_COMPONENTS (state, components) {
    state.components = components
  },

  ADD_COMPONENT (state, component) {
    state.components.push(component)
  },

  CHECK_AUTHSTATE (state, loggedIn) {
    state.loggedIn = loggedIn
  }
}

export default new Vuex.Store({
  state,
  mutations
})
