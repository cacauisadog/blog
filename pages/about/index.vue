<template>
  <article>
    <h1>{{ about.title }}</h1>
    <NuxtContent :document="about" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  }
}
</script>
