<template>
  <div class="counter">
    <h1>Counter</h1>
    <div class="container">
      <div>
        <button @click="increment">INCREASE</button>
        <p>{{ count }}</p>
        <button @click="decrement">DECREASE</button>
      </div>
      <div>
        <input type="number" v-model="initialValue" />
        <div class="btn">
          <button @click="setValue">SETVALUE</button>
          <button @click="reset">RESET</button>
        </div>
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
  display: grid;
  place-items: center;
  margin-top: 10px;
  text-align: center;
  padding: 20px;
  width: inherit;
}

.container {
  background-color: rgb(243, 236, 236);
  border-radius: 10px;
  padding: 20px;
}

h1 {
  font-size: 40px;
  font-weight: bolder;
  line-height: 60px;
  margin-bottom: 20px;
}

button {
  background-color: #390ce5;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  display: block;
  margin: 10px auto;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

p {
  padding: 10px;
  background-color: white;
  font-size: 30px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px auto;
}

input:focus {
  outline: none;
}
</style>
