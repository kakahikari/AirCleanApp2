import Vue from 'vue'
import Vuex from 'vuex'
import SETTINGS from './modules/settings'
import MACHINES from './modules/machines'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SETTINGS,
    MACHINES
  },

  actions: {
    SET_DEFAULT ({commit}) {
      commit('MACHINE_DEFAULT')
      commit('SETTINGS_DEFAULT')
    },
    SET_CONNECT ({dispatch, state, commit}, params) {
      console.log('try connecting...')
      if (Vue.cordova.chromeSocketsTcp === undefined) {
        if (process.env.NODE_ENV !== 'development') alert('無法啟動連線')
        return
      }

      Vue.cordova.chromeSocketsTcp.create({}, function (info) {
        commit('SET_SETTINGS_SOCKETID', info.socketId)
        Vue.cordova.chromeSocketsTcp.connect(state.SETTINGS.socketId, params.ip, state.SETTINGS.port, (res) => {
          if (res === 0) {
            Vue.cordova.chromeSocketsTcp.onReceive.addListener(function (res) {
              dispatch('GET_VALUE', ab2str(res.data).split('\r\n'))
            })
          } else {
            alert(params.ip + '連線失敗')
          }
        })
      })
    },
    SEND_GETIP ({state}) {
      var data = str2ab('GETIP' + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    SEND_JOIN ({state}, params) {
      var data = str2ab('JOIN=' + params.name + ',"' + params.password + '"\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    SEND_REST ({state}) {
      var data = str2ab('REST' + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    SEND_GETAF ({state}) {
      var data = str2ab('GETAF' + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    GET_VALUE ({commit, state}, params) {
      if (state.SETTINGS.join) {
        commit('SET_SETTINGS_WIFILIST', params)
      } else {
        if (params[0][0] === '"') {
          // 為ip命令
          let ip = params[0].replace('"', '').replace('"', '')
          alert('ip' + ip + '已加入')
          commit('SET_SETTINGS_IP', ip)
        } else {
          // 機器狀態
          commit('SET_MACHINE_VALUE', {id: 0, value: params[0]})
        }
      }
    }
    // SEND_VALUE ({state, getters}) {
    //   var data = str2ab('WRAF=' + getters.MACHINE_VALUE + '\r\n')
    //   Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    // }
  }
})

function ab2str (buffer) {
  var arr = new Uint8Array(buffer)
  var str = String.fromCharCode.apply(String, arr)
  if (/[\u0080-\uffff]/.test(str)) {
    throw new Error('this string seems to contain (still encoded) multibytes')
  }
  return str
}

function str2ab (str) {
  if (/[\u0080-\uffff]/.test(str)) {
    throw new Error('this needs encoding, like UTF-8')
  }
  var arr = new Uint8Array(str.length)
  for (var i = str.length; i--;) {
    arr[i] = str.charCodeAt(i)
  }
  return arr.buffer
}
