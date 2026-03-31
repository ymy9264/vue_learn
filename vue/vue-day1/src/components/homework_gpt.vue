<!--
✅ 任务1：实现添加功能

👉 点击“添加”后：

把 newTodo 加到 list 里

然后清空输入框

✅ 任务2：实现删除功能

👉 点击“删除”：

删除对应 index 的项

我们可以把这个 TodoList 升级成更像“面试项目”的版本：

👉 加“完成状态”

效果变成：

✔ 点击可以标记完成

✔ 已完成变灰 + 删除线

✔ 未完成数量统计
-->
<template>
  <div>
    <h1>TodoList</h1>

    <!-- 输入框 -->
    <input v-model="newTodo" placeholder="输入待办事项" />
    <button @click="addTodo">添加</button>

    <!-- 列表 -->
    <ul>
      <li @click="item.finish = 1" :class="{'item_finished':item.finish}" v-for="(item, index) in list" :key="index">
        {{ item.name }}
        <button @click="removeTodo(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 输入框内容
const newTodo = ref('')

// 列表数据
const list = ref([
  {name:'学习 Vue3',finish:0},
  {name:'写一个项目',finish:0}
])

// ❗添加功能（你来完善）
const addTodo = () => {
    if(!newTodo.value.trim()) return
    list.value.push({name:newTodo.value,finish:0})
    newTodo.value = ''
}

// ❗删除功能（先留着，等会讲）
const removeTodo = (index) => {
    list.value.splice(index,1)
}
</script>