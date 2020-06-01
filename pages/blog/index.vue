<template>
  <div class="container max-w-screen-md mx-auto px-4 md:px-0">
    <h1 class="title">
      List of blog posts
    </h1>
    <article-list
      v-for="article in articles"
      :key="article.slug"
      :article="article"
    />
  </div>
</template>

<script>
export default {
  components: {
    ArticleList: () => import('./components/ArticleList.vue')
  },
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  }
}
</script>

<style>
</style>
