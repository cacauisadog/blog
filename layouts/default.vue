<template>
  <div>
    <Navbar />
    <main class="mt-16">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
