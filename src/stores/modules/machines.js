const state = {
  list: [{
    // 呈現面
    group_name: '群組1',
    enable: true,
    power: '0',
    co2overFlag: '0',
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
    timeS: 'FF',
    // 機台內部資料
    id: '0000',
    co2Flag: '0',
    uvLightFlag: '0',
    filter: '00',
    pm25: 'FFFF',
    vod: 'FFFF',
    co2: 'FFFF'
  }]
}

const mutations = {
  MACHINE_DEFAULT (state) {
    state.list[0].group_name = '群組1'
    state.list[0].enable = true
    state.list[0].power = '0'
    state.list[0].co2overFlag = '0'
    state.list[0].resetPm25 = '0'
    state.list[0].resetPm10 = '0'
    state.list[0].resetFilter = '0'
    state.list[0].timer = '0'
    state.list[0].timerStartH = '00'
    state.list[0].timerStartM = '00'
    state.list[0].timerEndH = '00'
    state.list[0].timerEndM = '00'
    state.list[0].shutdownH = '00'
    state.list[0].shutdownM = '00'
    state.list[0].speed = '0'
    state.list[0].timeH = 'FF'
    state.list[0].timeM = 'FF'
    state.list[0].timeS = 'FF'
    state.list[0].id = '0000'
    state.list[0].co2Flag = '0'
    state.list[0].uvLightFlag = '0'
    state.list[0].filter = '00'
    state.list[0].pm25 = 'FFFF'
    state.list[0].vod = 'FFFF'
    state.list[0].co2 = 'FFFF'
  },
  SET_MACHINE_RESETPM25 (state, payload) {
    state.list[payload.id].resetPm25 = payload.value
  },
  SET_MACHINE_RESETPM10 (state, payload) {
    state.list[payload.id].resetPm10 = payload.value
  },
  SET_MACHINE_RESETFILTER (state, payload) {
    state.list[payload.id].resetFilter = payload.value
  },
  SET_MACHINE_TIMER (state, payload) {
    state.list[payload.id].resetTimer = payload.value
  },
  SET_MACHINE_TIMER_START (state, payload) {
    state.list[payload.id].timerStartH = payload.value
    state.list[payload.id].timerStartM = payload.value
  },
  SET_MACHINE_TIMER_END (state, payload) {
    state.list[payload.id].timerEndH = payload.value
    state.list[payload.id].timerEndM = payload.value
  },
  SET_MACHINE_SHUTDOWN (state, payload) {
    state.list[payload.id].shutdownH = payload.value
    state.list[payload.id].shutdownM = payload.value
  },
  SET_MACHINE_SPEED (state, payload) {
    state.list[payload.id].speed = payload.value
  },
  SET_MACHINE_TIME (state, payload) {
    state.list[payload.id].timeH = payload.value
    state.list[payload.id].timeM = payload.value
    state.list[payload.id].timeS = payload.value
  },
  SET_MACHINE_ID (state, payload) {
    state.list[payload.id].id = payload.value
  },
  SET_MACHINE_VALUE (state, payload) {
    let temp = payload.value.split(',')
    state.list[payload.id].id = temp[0]
    state.list[payload.id].power = temp[1]
    state.list[payload.id].co2 = temp[2]
    state.list[payload.id].co2Flag = temp[3]
    state.list[payload.id].uvLightFlag = temp[4]
    state.list[payload.id].timer = temp[5]
    state.list[payload.id].timerStartH = temp[6]
    state.list[payload.id].timerStartM = temp[7]
    state.list[payload.id].timerEndH = temp[8]
    state.list[payload.id].timerEndM = temp[9]
    state.list[payload.id].filter = parseInt(temp[19], 16)
    state.list[payload.id].pm25 = parseInt(temp[20], 16)
    state.list[payload.id].vod = parseInt(temp[21], 16)
    state.list[payload.id].co2 = parseInt(temp[22], 16)
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
