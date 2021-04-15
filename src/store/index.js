import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerOn: true
  },
  mutations: {
    setDrawerOn: (state, value) => {
      state.drawerOn = value
    },
  },
  actions: {
  },
  modules: {
  }
})
