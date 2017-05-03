import Vue from 'vue'
import Vuex from 'vuex'
import SETTINGS from './modules/settings'
import MACHINE from './modules/machine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SETTINGS,
    MACHINE
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
        Vue.cordova.chromeSocketsTcp.connect(state.SETTINGS.socketId, state.SETTINGS.ip, state.SETTINGS.port, (res) => {
          if (res === 0) {
            Vue.cordova.chromeSocketsTcp.onReceive.addListener(function (res) {
              dispatch('GET_VALUE', ab2str(res.data).split('\r\n'))
            })
            // 建立連線3秒內若未收到東西則丟GETIP
            setTimeout(() => {
              commit('SET_SETTINGS_JOIN', false)
              let count = 0
              let interval = setInterval(() => {
                if (count > 2) return clearInterval(interval)
                dispatch('SEND_GETIP')
                count++
              }, 1000)
            }, 3000)
          } else {
            alert('連線失敗')
          }
        })
      })
    },
    SEND_GETIP ({state}) {
      var data = str2ab('GETIP' + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    SEND_JOIN ({state}, params) {
      var data = str2ab('JOIN=' + params.name + ',' + params.password + '\r\n')
      alert('JOIN=' + params.name + ',"' + params.password + '"\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    SEND_REST ({state}) {
      var data = str2ab('REST' + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    },
    GET_VALUE ({commit, state}, params) {
      if (state.SETTINGS.join) {
        commit('SET_SETTINGS_WIFILIST', params)
      } else {
        alert('已在家用模式')
        if (params[0][0] === '"') {
          // 為ip命令
          commit('SET_SETTINGS_IP', params[0])
        } else {
          // 機器狀態
        }
      }
    },
    SEND_VALUE ({state, getters}) {
      var data = str2ab('WRAF=' + getters.MACHINE_VALUE + '\r\n')
      Vue.cordova.chromeSocketsTcp.send(state.SETTINGS.socketId, data)
    }
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
