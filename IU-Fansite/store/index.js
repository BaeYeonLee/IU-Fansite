
export const state = () => ({
  isDarkMode: false,
  title: ''
})

export const getters = () => ({
  getStateDackMode(state) {
    return state.isDarkMode
  },
  getTitle(state) {
    return state.title
  }
})

export const mutations = () => ({
  setDarkMode(state, flag) {
    state.isDarkMode = flag
  },
  setTitle(state, title) {
    state.title = title
  },
})

export const actions = () => ({
  setDarkMode(context, payload) {
    context.commit('setDarkMode', payload.isDarkMode)
  },
  setTitle(context, title) {
    context.commit('setTitle', title)
  },
})

export const modules = () => ({

})
