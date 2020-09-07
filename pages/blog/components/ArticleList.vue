<template>
  <div>
    <ArticleSnippet
      v-for="article in articles"
      :key="article.slug"
      :article="article"
      class="mb-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
