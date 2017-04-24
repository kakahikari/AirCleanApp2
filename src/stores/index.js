import Vue from 'vue'
import Vuex from 'vuex'
import MACHINE from './modules/machine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MACHINE
  },
  actions: {
    SET_DEFAULT ({commit}) {
      commit('MACHINE_DEFAULT')
    },
    SET_CONNECT () {
      console.log('starting connect...')
      console.log(Vue.cordova)
      // Vue.cordova.chromeSocketsTcp.create({}, function (info) {
      //   Vue.cordova.chromeSocketsTcp.connect(info.socketId, '192.168.0.13', 7890, function (result) {
      //     // var data = str2ab("WRAF=" + pow + ",0,0,0,0,0,00,00,00,00,00,00," + power + ",FF,FF,FF\r\n")
      //     // Vue.cordova.chromeSocketsTcp.send(info.socketId, data, function (ret) {
      //     //     console.log('send')
      //     // })
      //   })
      //   Vue.cordova.chromeSocketsTcp.onReceive.addListener(function (ret) {
      //     alert('get')
      //     alert('get' + ab2str(ret.data))
      //   })
      // })
    }
  }
})

// function ab2str (buffer) {
//   var arr = new Uint8Array(buffer)
//   var str = String.fromCharCode.apply(String, arr)
//   if (/[\u0080-\uffff]/.test(str)) {
//     throw new Error('this string seems to contain (still encoded) multibytes')
//   }
//   return str
// }
// function str2ab (str) {
//   if (/[\u0080-\uffff]/.test(str)) {
//     throw new Error('this needs encoding, like UTF-8')
//   }
//   var arr = new Uint8Array(str.length)
//   for (var i = str.length; i--;) {
//     arr[i] = str.charCodeAt(i)
//   }
//   return arr.buffer
// }
