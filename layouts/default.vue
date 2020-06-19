<template>
  <div>
    <Navbar />
    <main class="mt-20">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<style lang="postcss">
html {
  font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@screen sm {
  html {
    font-size: 16px;
  }
}

body {
  background-color: rgb(34, 34, 34);
}

.title {
  @apply text-4xl leading-tight mb-6 text-gray-200;
}

.description {
  @apply text-gray-100 text-xl mb-2;
}

.date {
  @apply text-sm font-light;
}

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

.nuxt-content > p > a {
  @apply text-blue-600;
}

.nuxt-content > p > code {
  @apply italic text-xl;
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
