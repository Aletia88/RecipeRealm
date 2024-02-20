<script setup>
import { ref } from "vue";
let input = ref("");
const fruits = [""];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<template>
   <input type="text" v-model="input" placeholder="Search" class="p-2 h-fit border rounded-md border-solid border-[#F4CE14] w-1/4  " />
  <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
    <p>{{ fruit }}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
     <p>No results found!</p>
  </div>
</template>

