import Vue from 'vue'
import Router from 'vue-router'
import * as services from '../services'

Vue.use(Router)

import Login from '../components/Login'
import NotFound from '../components/NotFound'
import ComponentList from '../components/component/ComponentList'

function requireAuth (to, from, next) {
  console.log('via localstorage method: '+ window.localStorage.getItem("feathers-jwt"))

  if (localStorage.getItem('feathers-jwt') === null) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: ComponentList, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout', beforeEnter (to, from, next) {
      services.app.logout()
      next('/login')
    }},
    { path: '*', component: NotFound }
  ]
})
