import { createApp } from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or sessionStorage or whatever storage you are using.
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({ user: state.user })
})

import App from '../app.vue'
const app = createApp(App);
app.use(Vuex)

export default new Vuex.Store({
  state: {
      user: {},
      completion: false,
      address: 0,
      inspection: 0
  },
  getters: {
      user: state => state.user,
      userID: state=> (state.user.id != undefined) ? state.user.id : false,
      completion: state => state.completion,
      address: state => state.address,
      inspection: state => state.inspection
  },
  mutations: {
      setUser(state, newUser) {
          state.user = newUser
      },
      toggleCompletion(state) {
          state.completion = !state.completion
      },
      changeAddress(state, newAddress) {
          state.address = newAddress
      },
      changeInspection(state, newInspection) {
          state.inspection = newInspection
      }
  },
  plugins: [vuexPersist.plugin]
})
