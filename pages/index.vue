<template>
  <div class="container max-w-screen-md md:px-0 px-5">
    <h1 class="title leading-8">
      {{ home.title }}
    </h1>
    <nuxt-content :document="home" />
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
