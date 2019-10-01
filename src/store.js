import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const store = new Vuex.Store({
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

  plugins: [new VuexPersistence().plugin]
});

export default store;
