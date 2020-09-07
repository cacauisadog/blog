<template>
  <div>
    <h1>Blog</h1>
    <h2>Tutoriais, guias, <i>how-to's</i> e textos no geral mais longos.</h2>
    <hr>
    <ArticleListSkeleton v-if="!articles" />
    <LazyArticleList
      v-else
      :articles="articles"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  }
}
</script>
