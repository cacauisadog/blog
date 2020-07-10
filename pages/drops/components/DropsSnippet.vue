<template>
  <article class="rounded shadow overflow-hidden mb-8 border border-white p-4">
    <router-link
      :to="`/drops/${drops.slug}`"
      class="block"
    >
      <h2 class="text-xl leading-7 font-semibold text-gray-200">
        {{ drops.title }}
      </h2>
      <p class="text-sm font-thin text-gray-100">
        {{ dropsDate }}
      </p>
      <h3 class="mt-3 text-base leading-6 text-gray-100">
        {{ drops.description }}
      </h3>
    </router-link>
  </article>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    drops: {
      type: Object,
      required: true
    }
  },
  computed: {
    dropsDate () {
      return dayjs(this.drops.createdAt).format('DD/MM/YYYY')
    }
  }
}
</script>
