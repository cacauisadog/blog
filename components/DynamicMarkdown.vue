<template>
  <div class="container max-w-screen-md sm:mx-auto p-4">
    <section class="text-gray-100 mb-8">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="text-xl mb-2">
        {{ description }}
      </p>
      <p class="text-sm font-light">
        {{ date }}
      </p>
    </section>
    <Component :is="dynamicComponent" />
  </div>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: null,
      description: null,
      date: null,
      dynamicComponent: null
    }
  },
  created () {
    //  JEITO TOP - FAZ CODE SPLITTING
    import('~/contents/blog/' + this.fileName + '.md').then((md) => {
      const attr = md.attributes
      this.title = attr.title
      this.description = attr.description
      this.date = attr.date
      this.dynamicComponent = md.vue.component
    })

    // JEITO BURRO
    // const md = require(`~/contents/blog/${this.fileName}.md`)
    // const attr = md.attributes
    // this.title = attr.title
    // this.description = attr.description
    // this.date = attr.date
    // this.dynamicComponent = md.vue.component
  }
}

</script>

<style lang="postcss">
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
  margin-bottom: 3rem;
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
