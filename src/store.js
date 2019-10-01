import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    useCustomConfig: false,
    sites: [],
  },

  getters: {

  },

  mutations: {
    toggleCustomConfig(state, value) {
      state.useCustomConfig = value;
    },

    addSite(state, site) {
      state.sites.push(site);
    },
  },

  actions: {

  },

  plugins: [new VuexPersistence().plugin],
});

export default store;
