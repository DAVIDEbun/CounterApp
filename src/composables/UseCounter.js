import { ref } from "vue";

const count = ref(0);
const initialValue = ref(0);

export function useCounter() {
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function reset() {
    count.value = 0;
  }

  function setValue() {
    count.value = initialValue.value;
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    initialValue,
  };
}
