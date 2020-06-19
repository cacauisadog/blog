<template>
  <div class="container max-w-screen-md md:px-0 px-5">
    <h1 class="title">
      {{ about.title }}
    </h1>
    <nuxt-content :document="about" />
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
