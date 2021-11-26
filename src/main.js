import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      counter: 0,
      counter2: 11,
      counter3: 12,
      history: [0],
    }
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload
      state.history.push(state.counter)
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload
    },
  },
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get(
        'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new',
      )
      context.commit('addToCounter', data.data) // after get data from serve, this line will trigger addToCounter with param = data.data
    },
  },
  getters: {
    activeIndexs: (state) => (payload) => {
      let indexs = []
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexs.push(index)
        }
      })

      return indexs
    },
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
