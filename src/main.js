// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'stores'

Vue.config.productionTip = false

// UI
import 'assets/scss/index.scss'
import touch from 'vue-directive-touch'
Vue.use(touch)

import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',

  mounted () {
    this.$store.dispatch('SET_DEFAULT', {context: this})
    this.$store.dispatch('SET_CONNECT', {context: this})
  },

  router,
  store,
  template: '<App/>',
  components: { App }
})
