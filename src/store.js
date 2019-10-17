import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    request: {
      name: null,
      age: null,
      city: null,
      gender: null,
      mobile: null,
      questions: []
    }
  },
  getters: {
    invalidUrl (state) {
      for (const key in state.request) {
        if (state.request.hasOwnProperty(key) && key !== 'mobile' &&  [null, ''].indexOf(state.request[key]) !== -1) {
          return true
        }
      }

      return false
    }
  },
  mutations: {
    UPDATE_USERINFO (state, payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          state.request[key] = payload[key];
        }
      }
    },
    ADD_QUESTION (state, question) {
      state.request.questions.push(question);
    },
  },
  actions: {

  }
})
