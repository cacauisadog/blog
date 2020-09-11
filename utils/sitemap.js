export default async () => {
  // straight outta https://content.nuxtjs.org/advanced/#static-site-generation

  const { $content } = require('@nuxt/content')

  const files = await $content({ deep: true })
    .only(['path'])
    .fetch()

  return files.map(file => file.path === '/index' ? '/' : file.path)
}
