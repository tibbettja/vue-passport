import { HTTP } from '../../common/http-common'

const state = {
  errors: [],
  username: '',
  admin: false,
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
  },
  // Auth
  'SET_USERNAME' (state, data) {
    state.username = data.username
    state.isAdmin = data.isAdmin
  }
}

const actions = {
  // auth
  async newUser ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/user/create`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('SET_USERNAME', { username: userRes.data.username, isAdmin: false })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Creating a new Account', userRes)
    commit('ERROR', 'Error when Creating a new Account')
  },
  async login ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/user/login`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('SET_USERNAME', { username: userRes.data.result.username, isAdmin: userRes.data.result.isAdmin })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Logging in', userRes)
    commit('ERROR', 'Error when Logging in')
  },
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
  isAdmin (state) {
    return state.isAdmin
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
