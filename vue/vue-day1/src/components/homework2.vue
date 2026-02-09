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
    <div @click="count++">{{ conunt }}</div>
</template>

<script setup>
    import { ref,computed } from 'vue';
    const count = ref(0);

</script>