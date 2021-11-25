<template>
  <div>
    <h1>VueX Counter</h1>
    <!-- <h1 class="counter">{{ $store.state.counter }}</h1> -->
    <h1 class="counter">{{ counter }}</h1>
    <!-- Can use this syntax after mapState -->
    <!-- get state from main.js -->
    <button>-</button>
    <input type="number" v-model="value" />
    <button>+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
}
</script>

<style scoped>
.counter {
  font-size: 5rem;
}
</style>
