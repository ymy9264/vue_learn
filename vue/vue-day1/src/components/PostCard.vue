<template>
  <div class="post-card">
    <router-link :to="'/post/' + post.slug">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>