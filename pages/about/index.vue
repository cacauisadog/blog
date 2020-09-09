<template>
  <article>
    <h1>{{ about.title }}</h1>
    <NuxtContent :document="about" />
  </article>
</template>

<script>
import { SEOData, createSEOMeta } from '~/utils/seo'

export default {
  async asyncData ({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  },
  head () {
    const { title, description } = this.about

    return {
      title: title + SEOData.delimiter + SEOData.title,
      meta: createSEOMeta({ description })
    }
  }
}
</script>
