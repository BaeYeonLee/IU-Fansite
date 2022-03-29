// export const state = () => ({
//   title: ''
// })

// export const getters = () => ({
//   getTitle(state) {
//     return state.title
//   }
// })

// export const mutations = () => ({
//   setTitle(state, title) {
//     console.log('mutations title : ' + title)
//     state.title = title
//   },
// })

export default {
  state() {
    return {
      title: ''
    }
  },
  getters: {
    getTitle(state) {
      return state.title
    }
  },
  mutations: {
    setTitle(state, title) {
      console.log('mutations title : ' + title)
      state.title = title
    },
  }
}