<template>
  <article class="md:p-0 p-4">
    <MarkdownContent :markdown="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
</script>
