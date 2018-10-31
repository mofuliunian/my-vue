import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
Vue.use(Vuex)
console.log(app)
const store = new Vuex.Store({
  modules: {
    app
  }
})
export default store
