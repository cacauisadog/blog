<template>
  <div class="container max-w-screen-md sm:mx-auto p-4">
    <h1 class="title">
      Testing frontmatter markdown loader
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
.title {
  @apply text-4xl leading-tight mb-6 text-gray-200;
}

.dynamicMarkdown > h2 {
  font-weight: 400;
  @apply text-3xl leading-tight mb-5 text-gray-100;
}

.dynamicMarkdown > h3 {
  font-weight: 400;
  @apply text-2xl leading-tight mb-4 text-gray-100;
}

.dynamicMarkdown > ul {
  @apply ml-5 list-disc font-light text-xl leading-normal mb-12 text-gray-100;
}

.dynamicMarkdown > ul > li {
  @apply mb-4;
}

.dynamicMarkdown > p {
  @apply font-light text-xl leading-normal mb-12 text-gray-100;
}

.dynamicMarkdown > p > a:hover {
  @apply underline;
}

.dynamicMarkdown > p > a:link {
  @apply text-blue-600;
}

.dynamicMarkdown > pre {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 2.4rem;
  border-radius: 4px;
  overflow-x: scroll;
  display: block;
  margin-bottom: 5rem;
  @apply bg-gray-800;
}

.dynamicMarkdown > pre > code {
  @apply bg-gray-800;
}

@screen sm {
  .dynamicMarkdown > code {
    @apply text-base;
  }
}
</style>
