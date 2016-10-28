import Vue from 'vue'
import Router from 'vue-router'
import * as services from '../services'
import { mapActions } from 'vuex'

Vue.use(Router)

import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import ComponentList from '../components/component/ComponentList'

function requireAuth (to, from, next) {

  if (window.localStorage.getItem('feathers-jwt') === null) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

// function logout (to, from, next) {
//   services.app.logout().then(next('/login'))
// }

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/components', component: ComponentList, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})
