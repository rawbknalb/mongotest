import * as getters from './getters'

const state = {
  components: []
}

const mutations = {
  FETCH_COMPONENTS (state, components) {
    state.components = components
  },

  ADD_COMPONENT (state, component) {
    state.components.push(component)
  }
}

export default {
  state,
  getters,
  mutations
}
