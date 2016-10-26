import {
  LOGIN_USER,
  LOGOUT_USER
} from './mutation-types'

export function loginUser ({ commit }) {
  commit(LOGIN_USER)
}
export function logoutUser ({ commit }) {
  commit(LOGOUT_USER)
}
