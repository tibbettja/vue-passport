import { HTTP } from '../../common/http-common'

const state = {
  username: '',
  admin: false,
  loggedIn: false
}

const mutations = {
  'LOGIN' (state, data) {
    state.username = data.username
    state.isAdmin = data.isAdmin
    state.loggedIn = true
  },
  'LOGOUT' (state) {
    state.username = ''
    state.admin = false
    state.loggedIn = false
  }
}

const actions = {
  async signup ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/auth/register`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('LOGIN', { username: userRes.data.result.username, isAdmin: false, account: userRes.data.result.account })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Creating a new Account', userRes)
    commit('application/ERROR', userRes.data.error_message, { root: true })
  },
  async login ({commit}, { name, pass }) {
    var userRes = await HTTP.post(`/auth/login`, { username: name, password: pass })
    if (userRes.data.status === 200) {
      commit('LOGIN', { username: userRes.data.result.username, isAdmin: userRes.data.result.isAdmin, account: userRes.data.account })
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Logging in', userRes)
    commit('application/ERROR', userRes.data.error_message, { root: true })
  },
  async logout ({commit}) {
    var userRes = await HTTP.get(`/auth/logout`)
    if (userRes.data.status === 200) {
      commit('LOGOUT')
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Logging out', userRes)
    commit('application/ERROR', userRes.data.error_message, { root: true })
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
