<template>
  <article>
    <h1>{{ home.title }}</h1>
    <NuxtContent :document="home" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const home = await $content('index').fetch()

    return { home }
  }
}
</script>
