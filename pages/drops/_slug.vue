<template>
  <div>
    <article>
      <h1>{{ drops.title }}</h1>
      <h2>{{ drops.description }}</h2>
      <p class="text-gray-500">
        {{ dropsDate }}
      </p>
      <NuxtContent :document="drops" />
    </article>
    <nav
      v-if="prev || next"
      class="flex items-center mt-20"
    >
      <nuxt-link
        v-if="prev"
        :to="prev.slug"
      >
        👈 {{ prev.title }}
      </nuxt-link>
      <nuxt-link
        v-if="next"
        class="ml-auto"
        :to="next.slug"
      >
        {{ next.title }} 👉
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const drops = await $content('drops', params.slug).fetch()

    const [prev, next] = await $content('drops')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { drops, prev, next }
  },
  computed: {
    dropsDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.drops.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
