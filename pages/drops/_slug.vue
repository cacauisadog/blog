<template>
  <article class="md:p-0 p-4">
    <MarkdownContent :markdown="drops" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const drops = await $content('drops', params.slug).fetch()

    return { drops }
  }
}
</script>
