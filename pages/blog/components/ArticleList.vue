<template>
  <article class="flex flex-col rounded shadow overflow-hidden mb-8 last:mb-0 border border-white p-4">
    <nuxt-link
      :to="`/blog/${article.slug}`"
      class="block"
    >
      <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-200 dark:text-white">
        {{ article.title }}
      </h3>
      <p class="mt-3 text-base leading-6 text-gray-100 dark:text-gray-400">
        {{ article.description }}
      </p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
