<template>
  <div class="container max-w-screen-md md:px-2 px-5">
    <h1 class="title">
      List of blog posts
    </h1>
    <LazyArticleList
      v-if="articles"
      :articles="articles"
    />
    <ArticleListSkeleton v-else />
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
