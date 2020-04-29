<template>
  <div class="container mx-auto">
    <h1 class="text-6xl">
      hi!
    </h1>
    <test-post />
  </div>
</template>

<script>
import fm from '~/contents/posts/test.md'

export default {
  components: {
    'test-post': fm.vue.component
  }
}
</script>

<style>
</style>
