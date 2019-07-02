// import Vuex from 'vuex'
export const state = () => ({
  visibleHeader: false
})

export const mutations = {
  toggle(state, key) {
    state[key] = !state[key]
  }
}
