<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

import { ref } from 'vue'

const message = ref('Day 1，我在学 Vue')
function changeMessage() {
  message.value = '我真的在写 Vue 代码了'
}
</script>




<template>
  <div class="greetings">
    <h1 class="green">{{ message }}</h1>
    <button @click="changeMessage">点我</button>

    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
