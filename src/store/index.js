import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 公用数据
  state: state,
  // Actions
  actions: actions,
  // 通过mutations 改变state
  mutations: mutations,

  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
