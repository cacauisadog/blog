<template>
  <article class="container prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>{{ articleDate }}</p>
    <NuxtContent :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  computed: {
    articleDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.article.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
