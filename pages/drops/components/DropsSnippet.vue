<template>
  <article>
    <router-link
      :to="`/drops/${drops.slug}`"
      class="md:flex md:items-center p-4 transition duration-100 hover:bg-green rounded-md"
      style="text-decoration: none;"
    >
      <h2 style="margin: 0;">
        {{ drops.title }}
      </h2>
      <p
        class="ml-auto"
        style="margin-bottom: 0;"
      >
        {{ dropsDate }}
      </p>
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
