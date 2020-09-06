<template>
  <div>
    <h1 class="text-lg">
      List of drops
    </h1>
    <LazyDropsList
      v-if="dropsList"
      :drops-list="dropsList"
    />
    <DropsListSkeleton v-else />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const dropsList = await $content('drops')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { dropsList }
  }
}
</script>
