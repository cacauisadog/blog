<template>
  <DynamicMarkdown :file-name="fileName" />
</template>

<script>
import DynamicMarkdown from '~/components/DynamicMarkdown.vue'

export default {
  components: {
    DynamicMarkdown
  },
  async asyncData ({ params }) {
    return await {
      fileName: params.slug
    }
  }
}

</script>
