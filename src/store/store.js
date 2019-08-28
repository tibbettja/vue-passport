import Vue from 'vue'
import Vuex from 'vuex'

import application from './modules/application'
import user from './modules/user'
import note from './modules/note'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    application,
    user,
    note
  }
})
