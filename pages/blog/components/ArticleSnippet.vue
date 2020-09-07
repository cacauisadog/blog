<template>
  <article>
    <router-link
      :to="`/blog/${article.slug}`"
      class="md:flex md:items-center p-2 transition duration-100 hover:bg-green rounded-md"
      style="text-decoration: none;"
    >
      <h3 style="margin: 0;">
        {{ article.title }}
      </h3>
      <p
        class="md:ml-auto"
        style="margin-bottom: 0;"
      >
        {{ articleDate }}
      </p>
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
