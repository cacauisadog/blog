<template>
  <div class="container max-w-screen-md md:px-0 px-5">
    <MarkdownContent :markdown="home" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const home = await $content('index').fetch()

    return { home }
  }
}
</script>
