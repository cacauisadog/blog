<template>
  <div class="container max-w-screen-md md:px-0 px-5">
    <MarkdownContent :markdown="about" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  }
}
</script>

<style>
</style>
