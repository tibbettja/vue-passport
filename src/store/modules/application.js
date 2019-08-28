// import { HTTP } from '../../common/http-common'

const state = {
  errors: [],
  window: {}
}

const mutations = {
  'ERROR' (state, data) {
    state.errors.push(data)
  },
  'RESIZE' (state, data) {
    state.window = data
  }
}

const actions = {
  handleResize ({commit}) {
    commit('RESIZE', { width: window.innerWidth, height: window.innerHeight })
  }
}

const getters = {
  getErrors (state) {
    return state.errors
  },
  getWindow (state) {
    return state.window
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
