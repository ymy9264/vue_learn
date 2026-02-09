<!--
做一个小型待办清单，支持以下功能：

可以输入新待办事项，按回车或点击“添加”按钮加入列表
每条待办前面有个 checkbox，点击可以标记为「已完成」
已完成的项文字要变成灰色 + 删除线（用 CSS 实现）
显示两个统计数字：
总待办数
还剩几项未完成

（可选加分项）点击“清除已完成”按钮可以一次性删除所有已完成的项
-->

<template>
    <input v-model="todoInput" type="text" placeholder="请输入待办事项">
    <button @click="addTodo">添加</button>
    <button @click="delFinished">删除已完成</button>
    <div>
        <div v-for="(item,index) in list" :key="index" :class="{'checked-item':item.done}"><input type="checkbox" v-model="item.done">{{ item.text }}</div>
    </div>
    <div>总待办数：{{ totalCount }}</div>
    <div>未完成：{{ unfinishedCount }}</div>
</template>

<script setup>
    import { ref,computed } from 'vue'
    const todoInput = ref('')
    const list = ref([{text:'买牛奶',done:false},{text:'遛狗',done:false},{text:'写Vue小练习题',done:false}])
    const addTodo = () => {
        if(!todoInput.value.trim()) return;
        list.value.push({
            'text':todoInput.value,
            done:false
        })
        todoInput.value = ''
    }
    const totalCount = computed(()=>{
        return list.value.length
    })
    const unfinishedCount = computed(()=>{
        return list.value.filter(item=>!item.done).length
    })
    const delFinished = () => {
        list.value = list.value.filter(item => item.done === false)
    }
</script>

<style>
    .checked-item{ text-decoration: line-through; color:#999; }
    button{ margin:0 4px }
</style>