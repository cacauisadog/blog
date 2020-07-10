<template>
  <div class="container max-w-screen-md md:px-2 px-5">
    <h1 class="title">
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

<style>
</style>
