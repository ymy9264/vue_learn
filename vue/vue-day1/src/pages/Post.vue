<template>
  <div>
    <Header />
    <div v-html="content"></div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const content = ref('')
const route = useRoute()

onMounted(async () => {
  const res = await fetch(`/posts/${route.params.slug}.md`)
  content.value = await res.text()
})
</script>
