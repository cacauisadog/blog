<template>
  <article>
    <h1>{{ drops.title }}</h1>
    <p>{{ drops.description }}</p>
    <p>{{ dropsDate }}</p>
    <NuxtContent :document="drops" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const drops = await $content('drops', params.slug).fetch()

    return { drops }
  },
  computed: {
    dropsDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.drops.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
