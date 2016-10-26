import * as services from '../services'

export const fetchComponents = function ({dispatch}) {
  // Call the messages service on the server via websocket
  services.componentService.find({}).then(components => {
    dispatch('FETCH_COMPONENTS', components.data)
  })
}

export const addComponent = function ({dispatch}) {
  // A new message has been created on the server, so dispatch a mutation to update our state/view
  services.componentService.on('created', component => {
    dispatch('ADD_COMPONENT', component)
  })
}

export const checkAuthState = function ({dispatch}) {
  console.log('test')
  loggedIn = true
  dispatch('CHECK_AUTHSTATE', loggedIn)
}
