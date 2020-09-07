<template>
  <article>
    <router-link
      :to="`/blog/${article.slug}`"
      class="md:flex md:items-center hover:bg-gray-400"
      style="text-decoration: none;"
    >
      <h2 style="margin: 0;">
        {{ article.title }}
      </h2>
      <h3
        class="md:ml-auto"
        style="margin-bottom: 0;"
      >
        {{ articleDate }}
      </h3>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    articleDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.article.createdAt).toLocaleDateString('pt-br', options)
    }
  }
}
</script>
