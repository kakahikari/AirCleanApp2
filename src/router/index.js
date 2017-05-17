import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: require('pages/home') },
    { path: '/new', name: 'new', component: require('pages/new') },
    { path: '*', redirect: { path: '/' } }
  ]
})
