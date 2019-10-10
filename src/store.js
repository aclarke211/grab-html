import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    useCustomConfig: false,
    sites: [
      {
        name: 'Sky News',
        description: 'News stories from the UK and The Rest of the World',
        url: 'https://news.sky.com/',
        icon: './assets/icons/sky-news-icon.png',
        category: 'News',
        identifiers: {
          items: '.sdc-site-tiles__item',
        },
      },
    ],
    currentRoute: 'home',
    currentModalView: 'none',
  },

  getters: {

  },

  mutations: {
    update__useCustomConfig(state, value) {
      state.useCustomConfig = value;
    },

    addSite(state, site) {
      state.sites.push(site);
    },

    removeArrayItem(state, arrayDetails) {
      state[arrayDetails.array].splice(arrayDetails.index, 1);
    },

    update__currentRoute(state, route) {
      state.currentRoute = route;
    },

    update__currentModalView(state, modalView) {
      state.currentModalView = modalView;
    },
  },

  actions: {

  },

  plugins: [new VuexPersistence().plugin],
});

export default store;
