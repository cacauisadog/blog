<template>
  <header class="w-screen bg-black fixed top-0 z-50">
    <ul class="h-12 container max-w-screen-md px-4 md:px-0 flex text-lg text-gray-500 items-center">
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
          :to="`/drops`"
          class="p-2"
        >
          drops
        </nuxt-link>
      </li>
      <li class="ml-2 md:ml-4 cursor-pointer hover:text-white">
        <nuxt-link
          :to="`/about`"
          class="p-2"
        >
          sobre
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>
