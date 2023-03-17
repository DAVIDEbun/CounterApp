<template>
  <div class="counter">
    <div>
      <h1>Counter</h1>
    <div>
      <button @click="increment">INCREASE</button>
      <p>{{ count }}</p>
      <button @click="decrement">DECREASE</button>
    </div>
    <div>
      <input type="text" v-model="initialValue" />
      <button @click="setValue">SET VALUE</button>
      <button @click="reset">RESET</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from "../composables/UseCounter";

const { count, initialValue, value, increment, decrement, reset, setValue } =
  useCounter();
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  text-align: center;
  background-color: rgb(211, 203, 203);
}

h1 {
  font-size: 50px;
  font-weight: bolder;
  line-height: 60px;
}

button {
  background-color: #390ce5;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}

</style>
