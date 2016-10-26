import * as actions from './actions'
import * as getters from './getters'

import {
  LOGIN_USER,
  LOGOUT_USER
} from './mutation-types'

const state = {
  isLoggedIn: null
}

const mutations = {
  [LOGIN_USER] (state) {
    state.isLoggedIn = true
  },
  [LOGOUT_USER] (state) {
    state.isLoggedIn = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
