import Vue from 'vue'
import Vuex from 'vuex'
import { mockFetchFoo } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: null
  },
  mutations: {
    updateFoo(state, foo) {
      state.foo = foo
    }
  },
  actions: {
    updateFooData(context) {
      mockFetchFoo().then(baz => {
        context.commit('updateFoo', baz)
      })
    }
  },
  modules: {}
})
