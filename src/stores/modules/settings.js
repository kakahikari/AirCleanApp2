import MAIN from '../'

const state = {
  join: true,
  ip: '',
  socketId: 0,
  port: 7890,
  wifiList: []
}

const mutations = {
  SETTINGS_DEFAULT (state) {
    state.ready = false
    let ip = localStorage.getItem('ip')
    if (ip === null || ip === undefined) ip = '192.168.0.13'
    state.ip = ip
    state.socketId = 0
    state.port = 7890
    state.wifiList = []
  },
  SET_SETTINGS_JOIN (state, payload) {
    state.join = payload
  },
  SET_SETTINGS_IP (state, payload) {
    state.ip = payload
    // localStorage.setItem('ip', payload)
  },
  SET_SETTINGS_SOCKETID (state, payload) {
    state.socketId = payload
  },
  SET_SETTINGS_PORT (state, payload) {
    state.port = payload
  },
  SET_SETTINGS_WIFILIST (state, payload) {
    let list = []
    payload.forEach((node) => {
      let temp = node.split(',')
      if (temp[1] !== undefined) list.push({id: temp[0], name: temp[1]})
    })
    state.wifiList = list
  }
}

const actions = {

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
