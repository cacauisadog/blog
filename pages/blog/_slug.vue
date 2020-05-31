<template>
  <article class="container max-w-screen-md mx-auto md:p-0 p-4">
    <header>
      <h1 class="title">
        {{ article.title }}
      </h1>
    </header>

    <p class="description">
      {{ article.description }}
    </p>
    <p class="date">
      {{ article.date }}
    </p>
    <nuxt-content
      class="mt-8"
      :document="article"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>
