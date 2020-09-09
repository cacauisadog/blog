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
import { SEOData, createSEOMeta } from '~/utils/seo'

export default {
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  head () {
    const title = 'Todos os artigos'
    const description = 'Entenda mais sobre desenvolvimento web, incluindo linguagens como Javascript e Python e frameworks como Vue.js, Nuxt.js e Django.'

    return {
      title: title + SEOData.delimiter + SEOData.title,
      meta: createSEOMeta({ description })
    }
  }
}
</script>
