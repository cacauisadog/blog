<template>
  <article>
    <h1>{{ home.title }}</h1>
    <NuxtContent :document="home" />

    <article v-if="latestArticles">
      <h2>
        Últimos artigos no blog
        <nuxt-link to="/blog">
          <button class="p-2 mt-4 text-sm text-white bg-green rounded-md">
            Ver todos
          </button>
        </nuxt-link>
      </h2>
      <hr>
      <LazyArticleList :articles="latestArticles" />
    </article>

    <article
      v-if="latestDrops"
      class="mt-20"
    >
      <div>
        <h2>
          Últimos drops
          <nuxt-link to="/drops">
            <button class="p-2 mt-4 text-sm text-white bg-green rounded-md">
              Ver todos
            </button>
          </nuxt-link>
        </h2>
      </div>
      <hr>
      <LazyDropsList :drops-list="latestDrops" />
    </article>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const home = await $content('index').fetch()

    const latestArticles = await $content('blog')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()

    const latestDrops = await $content('drops')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()

    return { home, latestArticles, latestDrops }
  }
}
</script>
