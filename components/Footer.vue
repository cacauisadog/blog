<template>
  <footer class="bg-black py-8 text-center">
    <div class="container max-w-screen-sm mx-auto px-4 md:px-0 flex flex-col md:items-center md:flex-row mb-8">
      <div class="md:w-1/2">
        <p class="mb-4">
          Me dá um olá, me manda um oi 😁
        </p>
        <ul class="flex justify-center text-gray-100">
          <li>github</li>
          <li>twitter</li>
          <li>linkedin</li>
        </ul>
      </div>
      <div class="md:w-1/2">
        <p class="mb-4">
          Orgulhosamente construído com
        </p>
        <ul class="flex justify-center text-gray-100">
          <li>VueJS</li>
          <li>NuxtJS</li>
          <li>TailwindCSS</li>
          <li>Markdown</li>
        </ul>
      </div>
    </div>
    <p class="text-sm">
      Cauê Bittencourt Carnietto © {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
div > p {
  @apply text-lg;
}
</style>
