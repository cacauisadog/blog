<template>
  <article>
    <router-link
      :to="`/drops/${drops.slug}`"
      class="flex items-center hover:bg-gray-400"
      style="text-decoration: none;"
    >
      <h2 style="margin: 0;">
        {{ drops.title }}
      </h2>
      <h3
        class="ml-auto"
        style="margin-bottom: 0;"
      >
        {{ dropsDate }}
      </h3>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    drops: {
      type: Object,
      required: true
    }
  },
  computed: {
    dropsDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.drops.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
