import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutation from './mutation.js'
import getters from './getters.js'
import action from './action.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutation,
  getters,
  action
})
