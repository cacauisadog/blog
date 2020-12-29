<template>
  <div>
    <article>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p>{{ articleDate }}</p>
      <NuxtContent :document="article" />
    </article>
    <nav
      v-if="prev || next"
      class="flex items-center mt-20"
    >
      <nuxt-link
        v-if="prev"
        :to="prev.slug"
      >
        👈 {{ prev.title }}
      </nuxt-link>
      <nuxt-link
        v-if="next"
        class="ml-auto"
        :to="next.slug"
      >
        {{ next.title }} 👉
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import { SEOData, createSEOMeta } from '~/utils/seo'

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  head () {
    const { title, description } = this.article

    return {
      title: title + SEOData.delimiter + SEOData.title,
      meta: createSEOMeta({ description })
    }
  },
  computed: {
    articleDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.article.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
