<template>
  <div class="container max-w-screen-md mx-auto">
    <h1 class="title">
      {{ about.title }}
    </h1>
    <nuxt-content :document="about" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const about = await $content('pages', 'about').fetch()

    return { about }
  }
}
</script>

<style>
</style>
