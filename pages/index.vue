<template>
  <article class="container prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <h1 class="text-red-700">
      {{ home.title }}
    </h1>
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
