<template>
  <nav class="w-screen bg-black fixed top-0 z-50">
    <ul class="container flex items-center max-w-screen-lg px-4 h-12 text-lg text-gray-500">
      <li class="cursor-pointer hover:text-gray-500">
        <nuxt-link :to="`/`">
          logo
        </nuxt-link>
      </li>
      <li class="ml-auto cursor-pointer hover:text-white">
        <nuxt-link :to="`/blog`">
          blog
        </nuxt-link>
      </li>
      <li class="ml-8 md:ml-16 cursor-pointer hover:text-white">
        <nuxt-link :to="`/drops`">
          drops
        </nuxt-link>
      </li>
      <li class="ml-8 md:ml-16 cursor-pointer hover:text-white">
        <nuxt-link :to="`/about`">
          sobre
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
