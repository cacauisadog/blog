<template>
  <article class="container max-w-screen-md mx-auto md:p-0 p-4">
    <header>
      <h1 class="title">
        {{ doc.title }}
      </h1>
    </header>

    <p class="text-xl mb-2">
      {{ doc.description }}
    </p>
    <p class="text-sm font-light">
      {{ doc.date }}
    </p>
    <nuxt-content
      class="mt-8"
      :document="doc"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content('articles', params.slug).fetch()

    return { doc }
  }
}
</script>

<style lang="postcss">
.nuxt-content > h2 {
  font-weight: 400;
  @apply text-3xl leading-tight mb-5 text-gray-100;
}

.nuxt-content > h3 {
  font-weight: 400;
  @apply text-2xl leading-tight mb-4 text-gray-100;
}

.nuxt-content > ul {
  @apply ml-5 list-disc font-light text-xl leading-normal mb-12 text-gray-100;
}

.nuxt-content > ul > li {
  @apply mb-4;
}

.nuxt-content > p {
  @apply font-light text-xl leading-normal mb-12 text-gray-100;
}

.nuxt-content > p > a:hover {
  @apply underline;
}

.nuxt-content > p > a:link {
  @apply text-blue-600;
}

.nuxt-content > pre {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 2.4rem;
  border-radius: 4px;
  overflow-x: scroll;
  display: block;
  margin-bottom: 3rem;
  @apply bg-gray-800;
}

.nuxt-content > pre > code {
  @apply bg-gray-800;
}

@screen sm {
  .nuxt-content > code {
    @apply text-base;
  }
}
</style>
