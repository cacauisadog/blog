<template>
  <header class="w-screen bg-black fixed top-0">
    <ul class="h-12 container max-w-screen-md mx-auto px-4 md:px-0 flex text-lg text-gray-500 items-center">
      <li class="cursor-pointer hover:text-gray-500">
        <nuxt-link
          :to="`/`"
          class="p-2"
        >
          logo
        </nuxt-link>
      </li>
      <li class="ml-auto cursor-pointer hover:text-white">
        <nuxt-link
          :to="`/blog`"
          class="p-2"
        >
          blog
        </nuxt-link>
      </li>
      <li class="ml-2 md:ml-4 cursor-pointer hover:text-white">
        <nuxt-link
          :to="`/sobre`"
          class="p-2"
        >
          sobre
        </nuxt-link>
      </li>
      <li class="ml-2 md:ml-4 cursor-pointer hover:text-white">
        <nuxt-link
          :to="`/uses`"
          class="p-2"
        >
          /uses
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style>
</style>
