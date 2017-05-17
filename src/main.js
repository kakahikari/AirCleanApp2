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

  data () {
    return {
      dataRequestInterval: {}
    }
  },

  mounted () {
    this.$store.dispatch('SET_DEFAULT')
    this.tryConnect(this.$store.state.SETTINGS.ip)
    this.dataRequestInterval = setInterval(() => {
      this.tryConnect(this.$store.state.SETTINGS.ip)
    }, 60000)
  },

  methods: {
    tryConnect (ip) {
      if (Vue.cordova.deviceready || process.env.NODE_ENV === 'development') {
        this.$store.dispatch('SET_CONNECT', {ip: ip})
        setTimeout(() => {
          this.$store.dispatch('SEND_GETAF')
        }, 1000)
      } else {
        setTimeout(() => {
          this.tryConnect(ip)
        }, 3000)
      }
    },
    getMachineValue (id) {
      let value =
        this.$store.state.MACHINES.list[id].power + ',' +
        this.$store.state.MACHINES.list[id].co2overFlag + ',' +
        this.$store.state.MACHINES.list[id].resetPm25 + ',' +
        this.$store.state.MACHINES.list[id].resetPm10 + ',' +
        this.$store.state.MACHINES.list[id].resetFilter + ',' +
        this.$store.state.MACHINES.list[id].timer + ',' +
        this.$store.state.MACHINES.list[id].timerStartH + ',' +
        this.$store.state.MACHINES.list[id].timerStartM + ',' +
        this.$store.state.MACHINES.list[id].timerEndH + ',' +
        this.$store.state.MACHINES.list[id].timerEndM + ',' +
        this.$store.state.MACHINES.list[id].shutdownH + ',' +
        this.$store.state.MACHINES.list[id].shutdownM + ',' +
        this.$store.state.MACHINES.list[id].speed + ',' +
        this.$store.state.MACHINES.list[id].timeH + ',' +
        this.$store.state.MACHINES.list[id].timeM + ',' +
        this.$store.state.MACHINES.list[id].timeS
      return value
    }
  },

  router,
  store,
  template: '<App/>',
  components: { App }
})
