<template>
  <article class="flex flex-col rounded shadow overflow-hidden mb-8 last:mb-0 border border-white p-4">
    <nuxt-link
      :to="`/blog/${article.slug}`"
      class="block"
    >
      <h2 class="mt-2 text-xl leading-7 font-semibold text-gray-200 dark:text-white">
        {{ article.title }}
      </h2>
      <p class="text-sm font-thin">
        {{ articleDate }}
      </p>
      <h3 class="mt-3 text-base leading-6 text-gray-100 dark:text-gray-400">
        {{ article.description }}
      </h3>
    </nuxt-link>
  </article>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    articleDate () {
      return dayjs(this.article.createdAt).format('DD/MM/YYYY')
    }
  }
}
</script>

<style>
</style>
