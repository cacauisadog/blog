<template>
  <article class="rounded shadow overflow-hidden mb-8 border border-white p-4">
    <router-link
      :to="`/blog/${article.slug}`"
      class="block"
    >
      <h2 class="text-xl leading-7 font-semibold text-gray-200">
        {{ article.title }}
      </h2>
      <p class="text-sm font-thin text-gray-100">
        {{ articleDate }}
      </p>
      <h3 class="mt-3 text-base leading-6 text-gray-100">
        {{ article.description }}
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
