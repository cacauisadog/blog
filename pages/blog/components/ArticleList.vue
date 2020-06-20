<template>
  <div>
    <ArticleSnippet
      v-for="article in articles"
      :key="article.slug"
      :article="article"
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
