<template>
  <nav class="w-screen bg-black fixed top-0 z-50">
    <ul class="container flex items-center max-w-screen-lg px-4 h-16 text-lg text-gray-400">
      <li class="cursor-pointer">
        <nuxt-link :to="`/`">
          logo
        </nuxt-link>
      </li>
      <li class="ml-auto">
        <nuxt-link
          :to="`/blog`"
          class="p-4 cursor-pointer transition duration-100 hover:text-white hover:bg-green"
        >
          blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="`/drops`"
          class="p-4 cursor-pointer transition duration-100 hover:text-white hover:bg-green"
        >
          drops
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="`/about`"
          class="p-4 cursor-pointer transition duration-100 hover:text-white hover:bg-green"
        >
          sobre
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
