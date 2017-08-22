import so from '../api/stackoverflow.js';
import gh from '../api/github.js';

export const loadUsers = ({ commit }) => {
  gh.getUsers(ghUsers => {
    commit('setGhUsers', { ghUsers });
    commit('resetTimer');
  });
  so.getUsers(soUsers => {
    commit('setSoUsers', { soUsers });
    commit('resetTimer');
  });
}

export const decreaseTimer = ({ commit }) => {
  commit('decreaseTimer');
}
