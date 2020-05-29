<template>
  <div>
    <Navbar />
    <main class="mt-20">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

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

body {
  /* @apply bg-gray-900; */
  background-color: rgb(34, 34, 34);
}
/*
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  @apply bg-gray-800;
}

body::-webkit-scrollbar-thumb {
  @apply bg-purple-600;
} */

p {
  @apply text-gray-100;
}

.title {
  @apply text-4xl leading-tight mb-6 text-gray-200;
}

@screen sm {
  html {
    font-size: 16px;
  }
}
</style>
