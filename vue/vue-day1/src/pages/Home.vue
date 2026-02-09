<template>
  <div>
    <Header />
    <div v-for="post in posts" :key="post.slug">
      <PostCard :post="post" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PostCard from '../components/PostCard.vue'

// 导入文章列表
import postsData from '../data/posts.json'

export default {
  components: { Header, Footer, PostCard },
  data() {
    return { posts: postsData }
  }
}
</script>