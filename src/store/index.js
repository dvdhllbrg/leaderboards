import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  ghUsers: [],
  soUsers: [],
  timer: 60 * 10,
  history: []
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;
