import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 公用数据
  state: {
    city: '北京'
  },
  // Actions
  actions: {
    changeCity (ctx, city) {
      // 通过commit提交到mutations
      ctx.commit('changeCity', city)
    }
  },
  // 通过mutations 改变state
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
