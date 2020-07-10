<template>
  <article class="container max-w-screen-md md:p-0 p-4">
    <h1 class="title">
      {{ drops.title }}
    </h1>

    <p class="description">
      {{ drops.description }}
    </p>
    <p class="date">
      {{ drops.date }}
    </p>
    <nuxt-content
      class="mt-8"
      :document="drops"
    />
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
