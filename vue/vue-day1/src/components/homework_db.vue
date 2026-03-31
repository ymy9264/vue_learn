<template>
  <!-- 先加新增区域 -->
  <div class="add-area">
    姓名：<input type="text" v-model="inputName">
    岗位：
    <select v-model="selectJob">
      <option value="前端开发">前端开发</option>
      <option value="后端开发">后端开发</option>
      <option value="产品经理">产品经理</option>
    </select>
    <button @click="addRow">新增</button>
  </div>

  <!-- 表格部分（补选中和高亮逻辑） -->
  <table border="1" cellpadding="8" cellspacing="0">
    <!-- 表头不变 -->
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>岗位</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="(item, index) in tableData" 
        :key="index"
        <!-- 补：绑定点击事件 + 高亮样式 -->
        @click="selectRow(index)"
        :class="{ active: selectedIndex === index }"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.job }}</td>
        <td>
          <!-- 补：阻止冒泡，不然点删除会选中行 -->
          <button @click.stop="deleteRow(index)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'

// 1. 表格数据
const tableData = ref([
  { name: '张三', job: '前端开发' },
  { name: '李四', job: '后端开发' },
  { name: '王五', job: '产品经理' }
])

// 2. 补：定义输入框/下拉框的响应式变量
// const inputName = ?
// const selectJob = ?

// 3. 补：定义选中行的索引
// const selectedIndex = ?

// 4. 补：新增行方法
// const addRow = () => {
//   // 1. 校验：姓名不能为空
//   // 2. 往 tableData 里 push 新数据
//   // 3. 清空输入框和下拉框
// }

// 5. 补：选中行方法
// const selectRow = (index) => {
//   // 把 selectedIndex 设为当前 index
// }

// 6. 删除行方法（不变）
const deleteRow = (index) => {
  tableData.value.splice(index, 1)
}
</script>

<style>
/* 补：高亮样式 */
/* .active { ? } */
.add-area {
  margin: 20px;
}
input, select {
  margin-right: 8px;
  padding: 4px;
}
table {
  margin: 20px;
  width: 400px;
  text-align: center;
}
button {
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-area button {
  background: #42b983;
  color: white;
}
</style>