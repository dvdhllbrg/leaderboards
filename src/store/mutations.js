export const setGhUsers = (state, { ghUsers }) => {
  state.ghUsers = ghUsers;
  state.history.push('setGhUsers');
}

export const setSoUsers = (state, { soUsers }) => {
  state.soUsers = soUsers;
  state.history.push('setSoUsers');
}

export const decreaseTimer = (state) => {
  state.timer--
}

export const resetTimer = (state) => {
  state.timer = 60 * 10;
}
