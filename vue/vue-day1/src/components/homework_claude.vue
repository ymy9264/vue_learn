<!--
做一个简单的计数器，要求：

页面上显示一个数字，初始值是 0
有三个按钮：+1、-1、重置
有一个输入框，可以输入任意数字，点一个设置按钮，计数器变成输入的数字
数字小于0的时候，数字显示红色
-->
<template>
    <div :class="{ red:num<0 }">{{ num }}</div>
    <button class="btn-plus" @click="num=num+1">+1</button>
    <button class="btn-minus" @click="num=num-1">-1</button>
    <button class="btn-reset" @click="num=0">重置</button>
    <input type="number" v-model="num_set">
    <button class="btn-set" @click="num=Number(num_set)">设置</button>

</template>

<script setup>
    import { ref } from 'vue'
    const num = ref(0);
    const num_set = ref('');
</script>

<style scoped>
    .red{ color:#f00 }
</style>