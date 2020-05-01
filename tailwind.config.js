/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'blog/components/**/*.vue',
      'blog/layouts/**/*.vue',
      'blog/pages/**/*.vue',
      'blog/plugins/**/*.js',
      'blog/nuxt.config.js'
    ]
  }
}
