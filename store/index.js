import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    path: []
  },

  mutations: {
    setGlobalPath(state, path) {
      state.path = path;
    }
  },

  actions: {

  }
})

export default store;