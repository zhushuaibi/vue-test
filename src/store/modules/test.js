
const state = {
  count: 0
}
const mutations = {
  increment: (state) => {
    state.count++
  },
  decrement: (state) => {
    state.count--
  }
}
const getters = {
  getCount: state => state.count
}

export default {
  state,
  getters,
  mutations
}
