<template>
  <div>
    <input v-model="newItem" placeholder="输入待办事项" />
    <button @click="addItem">添加</button>

    <div v-if="list.length === 0">暂无待办事项，待添加</div>
    <div v-else>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ index + 1 }}. {{ item }} <button @click="delItem(index)">删除</button>
      </li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newItem = ref('')
const list = ref(['学Vue3', '做项目', '找好工作'])

function addItem() {
  if (newItem.value) {
    list.value.push(newItem.value)
    newItem.value = ''
  }
}

function delItem(index){
    list.value.splice(index,1)
}
</script>