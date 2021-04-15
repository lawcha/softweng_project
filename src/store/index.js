import Vue from 'vue'
import Vuex from 'vuex'

import drinks from "@/assets/drinks.json"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerOn: true,
    drinks: [],
    typeFilter: ''
  },
  mutations: {
    applySort: (state, sort) => {
      state.drinks.sort(sort);
    },
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
