import { CHANGECLIENTHEIGHT } from './app_type'

export default {
  state: {
    clientHeight: 0
  },
  mutations: {
    [CHANGECLIENTHEIGHT] (state, payload) {
      state.clientHeight = payload.clientHeight
    }
  },
  actions: {
    changeClientHeight ({ commit }, { payload }) {
      commit(CHANGECLIENTHEIGHT, payload)
    }
  }
}
