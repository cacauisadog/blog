<template>
  <NuxtContent
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mb-20"
    :document="markdown"
  />
</template>

<script>
export default {
  props: {
    markdown: {
      type: Object,
      required: true
    }
  }
}
</script>
