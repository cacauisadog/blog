<template>
  <div>
    <Navbar />
    <main class="mt-16">
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
