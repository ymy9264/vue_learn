<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <a :href="'/news/show/' + item.id">
          <span class="announce_category">{{ item.catname }}</span>
          <span class="announce_title">{{ item.title }}</span>
          <span class="announce_time">{{ item.inputtime }}</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="slideBox">
    <div class="bd">
      <div v-for="(pic, index) in banners" :key="pic.id">
        <img v-show="index === currentIndex" :src="pic.img" />
      </div>
    </div>

    <div class="hd">
      <ul>
        <li
          v-for="(pic, index) in banners"
          :key="index"
          @click="goTo(index)"
          :class="{ on: index === currentIndex }"
        >
          {{ index + 1 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const announce_list = ref([
  { id: 101, catname: "公告", title: "南开校友交流会", inputtime: 1739100000 },
  { id: 102, catname: "新闻", title: "Vue3 进阶实战", inputtime: 1739200000 },
]);
const currentIndex = ref(0);
const nextSlide = () => {
  // 挑战 1：如果到了最后一张，怎么跳回第一张？
  // 提示：banners.value.length 是总数，可以用取模运算 % 或者 if 判断
  if (currentIndex.value < banners.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

onMounted(() => {
  setInterval(nextSlide, 3000);
});
</script>
