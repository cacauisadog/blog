<template>
  <div>
    <h1>Drops</h1>
    <h2>Textos curtinhos com resoluções de problemas pontuais.</h2>
    <hr>
    <DropsListSkeleton v-if="!dropsList" />
    <LazyDropsList
      v-else
      :drops-list="dropsList"
    />
  </div>
</template>

<script>
import { SEOData, createSEOMeta } from '~/utils/seo'

export default {
  async asyncData ({ $content }) {
    const dropsList = await $content('drops')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { dropsList }
  },
  head () {
    const title = 'Todos os drops'
    const description = 'Dezenas de textos curtos sobre os mais variados assuntos, desde truquezinhos de programação à configurações de sistema operacional e hardware.'

    return {
      title: title + SEOData.delimiter + SEOData.title,
      meta: createSEOMeta({ description })
    }
  }
}
</script>
