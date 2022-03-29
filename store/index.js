export const state = () => ({
  isDarkMode: false,
})

export const getters = () => ({
  getStateDackMode(state) {
    return state.isDarkMode
  },
})

export const mutations = () => ({
  setDarkMode(state, flag) {
    state.isDarkMode = flag
  },
})