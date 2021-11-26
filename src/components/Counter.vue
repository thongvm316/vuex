<template>
  <div>
    <h1>VueX Counter</h1>
    <!-- <h1 class="counter">{{ $store.state.counter }}</h1> -->
    <h1 class="counter">{{ counter }}</h1>
    <!-- Can use this syntax after mapState -->
    <!-- get state from main.js -->
    <button @click="subtractFromCounter(parseInt(value))">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(parseInt(value))">+</button>

    <div>
      <button @click="addRandomNumber">Add by random number</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
      value: 1,
      // counter: 0,
    }
  },
  computed: {
    ...mapState(['counter', 'counter2', 'counter3']),
  },
  methods: {
    ...mapMutations(['addToCounter', 'subtractFromCounter']),
    ...mapActions(['addRandomNumber']),
  },
}
</script>

<style scoped>
.counter {
  font-size: 5rem;
}
</style>
