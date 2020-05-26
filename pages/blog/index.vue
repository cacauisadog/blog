<template>
  <div>
    <h1 class="text-white">
      blog index
    </h1>
    <template v-if="articles.length > 0">
      <article-list
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </template>
  </div>
</template>

<script>
import ArticleList from './components/-article.vue'

export default {
  components: { ArticleList },
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug'])
      .fetch()

    return { articles }
  }
}
</script>

<style>
</style>
