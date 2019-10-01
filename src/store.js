import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useCustomConfig: false,
  },

  getters: {

  },

  mutations: {
    toggleCustomConfig(state) {
      state.useCustomConfig = !state.useCustomConfig;
    },
  },

  actions: {

  },
});
