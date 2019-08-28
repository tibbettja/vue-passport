import { HTTP } from '../../common/http-common'

const state = {
  notes: []
}

const mutations = {
  'SET_NOTES' (state, data) {
    state.notes = data
  },
  'CLEAR_NOTES' (state) {
    state.notes = []
  }
}

const actions = {
  async createNote ({commit}, { text }) {
    var noteRes = await HTTP.post(`/note/create`, { text })
    if (noteRes.data.status === 200) {
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Creating a new Note', noteRes)
    commit('application/ERROR', 'Error when Creating a new Note', { root: true })
  },
  async updateNote ({commit}, { text, id }) {
    var noteRes = await HTTP.post(`/note/update`, { text, id })
    if (noteRes.data.status === 200) {
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Updating the Note', noteRes)
    commit('application/ERROR', 'Error when Updating the Note', { root: true })
  },
  async deleteNote ({commit}, { id }) {
    var noteRes = await HTTP.post(`/note/delete`, { id })
    if (noteRes.data.status === 200) {
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Deleting the Note', noteRes)
    commit('application/ERROR', 'Error when Deleting the Note', { root: true })
  },
  async loadNotes ({commit}) {
    var noteRes = await HTTP.get(`/note/all`)
    if (noteRes.data.status === 200) {
      commit('SET_NOTES', noteRes.data.result)
      return { success: true }
    }
    /* eslint-disable-next-line no-console */
    console.error('There was an error when Setting the Notes', noteRes)
    commit('application/ERROR', 'Error when Setting the Notes', { root: true })
  }
}

const getters = {
  getNotes (state) {
    return state.notes
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
