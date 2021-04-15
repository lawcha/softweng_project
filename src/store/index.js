import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import drinks from "@/assets/drinks.json"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerOn: true,
    drinks: [],
    typeFilter: ''
  },
  mutations: {
    filterType: (state, type) => {
      state.typeFilter = type;
    },
    setDrawerOn: (state, value) => {
      state.drawerOn = value
    },
    addDrinks: (state, drinks) => {
      state.drinks = drinks
    }
  },
  actions: {
    loadDrinks: (context) => {
      context.commit('addDrinks', drinks)
    },
  },
  modules: {
  }
})
