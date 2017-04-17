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
    }
  }
})
