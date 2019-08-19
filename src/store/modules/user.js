import { HTTP } from '../../common/http-common'

const state = {
  username: '',
  admin: false,
  account: {},
  loggedIn: false
}

const mutations = {
  'LOGIN' (state, data) {
    state.username = data.username
    state.isAdmin = data.isAdmin
    state.account = data.account
    state.loggedIn = true
  },
  'LOGOUT' (state) {
    state.username = ''
    state.admin = false
    state.account = {}
    state.loggedIn = false
  }
}

const actions = {
  // auth
  async newUser ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/user/create`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('LOGIN', { username: userRes.data.username, isAdmin: false, account: userRes.data.account })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Creating a new Account', userRes)
    commit('application/ERROR', 'Error when Creating a new Account', { root: true })
  },
  async login ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/user/login`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('LOGIN', { username: userRes.data.result.username, isAdmin: userRes.data.result.isAdmin, account: userRes.data.account })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Logging in', userRes)
    commit('application/ERROR', 'Error when Logging in', { root: true })
  },
  async logout ({commit}) {
    commit('LOGOUT')
  }
}

const getters = {
  isAdmin (state) {
    return state.isAdmin
  },
  getAccount (state) {
    return state.account
  },
  getUsername (state) {
    return state.username
  },
  getLoggedIn (state) {
    return state.loggedIn
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
