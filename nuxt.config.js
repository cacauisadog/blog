import path from 'path'
import fs from 'fs'

import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

function getFilePaths (type) {
  return fs.readdirSync(path.resolve(__dirname, 'contents', type))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${type}/${path.parse(filename).name}`)
}

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/prism-tomorrow-night.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  webfontloader: {
    google: {
      families: ['Lato:100,300,400,700,900'] /* Loads Lato font with weights 100 through 700 */
    }
  },
  generate: {
    routes: [
      '404'
    ]
      .concat(getFilePaths('blog'))
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
            vue: {
              root: 'dynamicMarkdown'
            },
            markdown (body) {
              return md.render(body)
            }
          }
        }
      )
    }
  }
}
