<template>
  <div class="bet-box">
    <h3>竞彩 2 串 1 模拟器</h3>
    
    <div v-for="(options, matchName) in bet" :key="matchName">
      <h4>{{ matchName === 'matchA' ? '第一场' : '第二场' }}</h4>
      <label><input type="checkbox" v-model="options.win"> 胜</label>
      <label><input type="checkbox" v-model="options.tie"> 平</label>
      <label><input type="checkbox" v-model="options.lose"> 负</label>
    </div>

    <hr>
    <p>当前注数：<strong :class="{ 'warning': isTooExpensive }">{{ totalNotes }}</strong> 注</p>
    
    <p v-if="isTooExpensive" style="color: red;">⚠️ 金额过大，请注意风险！</p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const bet = reactive({
  matchA: { win: false, tie: false, lose: false },
  matchB: { win: false, tie: false, lose: false }
});

const totalNotes = computed(() => {
  const getCount = (m) => m.win + m.tie + m.lose;
  return getCount(bet.matchA) * getCount(bet.matchB);
});

const isTooExpensive = computed(() => totalNotes.value > 5);
</script>

<style>
.warning { color: orange; font-size: 1.5em; }
</style>