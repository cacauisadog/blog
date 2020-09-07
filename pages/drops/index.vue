<template>
  <div>
    <h1>Drops</h1>
    <hr>
    <DropsListSkeleton v-if="!dropsList" />
    <LazyDropsList
      v-else
      :drops-list="dropsList"
    />
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
