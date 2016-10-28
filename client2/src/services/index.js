import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import io from 'socket.io-client'
import localstorage from 'feathers-localstorage'
import authentication from 'feathers-authentication/client'

const socket = io('http://localhost:3030')

export const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage }))

socket.on('reconnect', () => { console.log('moooua') })


export const assessmentService = app.service('assessments')
export const componentService = app.service('components')
export const userService = app.service('users')
export const ls = window.localStorage
