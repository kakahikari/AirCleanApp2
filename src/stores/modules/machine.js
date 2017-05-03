const state = {
  power: '0',
  co2: '0',
  resetPm25: '0',
  resetPm10: '0',
  resetFilter: '0',
  timer: '0',
  timerStartH: '00',
  timerStartM: '00',
  timerEndH: '00',
  timerEndM: '00',
  shutdownH: '00',
  shutdownM: '00',
  speed: '0',
  timeH: 'FF',
  timeM: 'FF',
  timeS: 'FF'
}

const mutations = {
  MACHINE_DEFAULT (state) {
    state.power = '0'
    state.co2 = '0'
    state.resetPm25 = '0'
    state.resetPm10 = '0'
    state.resetFilter = '0'
    state.timer = '0'
    state.timerStartH = '00'
    state.timerStartM = '00'
    state.timerEndH = '00'
    state.timerEndM = '00'
    state.shutdownH = '00'
    state.shutdownM = '00'
    state.speed = '0'
    state.timeH = 'FF'
    state.timeM = 'FF'
    state.timeS = 'FF'
  },
  SET_MACHINE_POWER (state, payload) {
    state.power = payload
  },
  SET_MACHINE_CO2 (state, payload) {
    state.co2 = payload
  },
  SET_MACHINE_RESETPM25 (state, payload) {
    state.resetPm25 = payload
  },
  SET_MACHINE_RESETPM10 (state, payload) {
    state.resetPm10 = payload
  },
  SET_MACHINE_RESETFILTER (state, payload) {
    state.resetFilter = payload
  },
  SET_MACHINE_TIMER (state, payload) {
    state.resetTimer = payload
  },
  SET_MACHINE_TIMER_START (state, payload) {
    state.timerStartH = payload
    state.timerStartM = payload
  },
  SET_MACHINE_TIMER_END (state, payload) {
    state.timerEndH = payload
    state.timerEndM = payload
  },
  SET_MACHINE_SHUTDOWN (state, payload) {
    state.shutdownH = payload
    state.shutdownM = payload
  },
  SET_MACHINE_SPEED (state, payload) {
    state.speed = payload
  },
  SET_MACHINE_TIME (state, payload) {
    state.timeH = payload
    state.timeM = payload
    state.timeS = payload
  }
}

const actions = {

}

const getters = {
  // MACHINE_DISPLAY: (state) => {
  //   return {
  //     group_name: '群組1',
  //     pm:
  //   }
  // },
  MACHINE_VALUE: (state) => {
    let value = state.power + ',' +
      state.co2 + ',' +
      state.resetPm25 + ',' +
      state.resetPm10 + ',' +
      state.resetFilter + ',' +
      state.timer + ',' +
      state.timerStartH + ',' +
      state.timerStartM + ',' +
      state.timerEndH + ',' +
      state.timerEndM + ',' +
      state.shutdownH + ',' +
      state.shutdownM + ',' +
      state.speed + ',' +
      state.timeH + ',' +
      state.timeM + ',' +
      state.timeS
    return value
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
