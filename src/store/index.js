import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    validation: false
  },
  mutations: {
    CREATE_ACCOUNT(state, {
      name,
      password
    }) {
      const account = {}
      account['name'] = name
      account['password'] = password

      state.users.push(account)
    },
    CHECK_ACCOUNT(state, {
      name,
      password
    }) {
      for (const user of state.users) {
        if (user['name'] === name && user['password'] === password) {
          state.validation = true
        }
      }
      if (!state.validation) alert('Username or password is not corrected.')

      state.validation = false
    }
  },
  actions: {},
  modules: {}
})