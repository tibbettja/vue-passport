// import { HTTP } from '../../common/http-common'

const state = {
  errors: [],
  window: {}
}

const mutations = {
  'ERROR' (state, data) {
    state.errors.push(data)
  },
  'POP_ERROR' (state) {
    if (state.errors.length) {
      state.errors.pop()
    }
  },
  'CLEAR_ERRORS' (state) {
    state.errors = []
  },
  'RESIZE' (state, data) {
    state.window = data
  }
}

const actions = {
  popError ({commit}) {
    commit('POP_ERROR')
  },
  clearErrors ({commit}) {
    commit('CLEAR_ERRORS')
  },
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
