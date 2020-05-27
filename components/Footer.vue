<template>
  <footer class="bg-black py-8 text-center">
    <div class="container max-w-screen-sm mx-auto px-4 md:px-0 flex flex-col md:items-center mb-8">
      <div class="md:w-1/2 mb-8">
        <p class="mb-4">
          Me dá um olá, me manda um oi
        </p>
        <ul class="flex justify-center text-white items-center">
          <li class="mb-2">
            <a
              href="https://www.github.com/cacauisadog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="github"
                :view-box-height="250"
              >
                <icon-github />
              </icon-base>
              <span class="underline text-blue-600">/cacauisadog</span>
            </a>
          </li>
          <li>
            <span class="text-white font-bold mx-8">||</span>
          </li>
          <li>
            <a
              href="https://www.twitter.com/cacauisadog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="twitter"
                :view-box-height="209"
              >
                <icon-twitter />
              </icon-base>
              <span class="underline text-blue-600">/cacauisadog</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="md:w-1/2">
        <p class="mb-4">
          Site construído com
        </p>
        <ul class="flex justify-center text-gray-100 justify-between">
          <li>
            <a
              href="https://www.vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="vuejs"
                :view-box-height="221"
              >
                <icon-vuejs />
              </icon-base>
            </a>
          </li>
          <li>
            <a
              href="https://www.nuxt.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="nuxt"
                :view-box-height="189"
              >
                <icon-nuxtjs />
              </icon-base>
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="tailwindcss"
                :view-box-height="154"
              >
                <icon-tailwindcss />
              </icon-base>
            </a>
          </li>
          <li>
            <a
              href="https://www.markdownguide.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="markdown"
                :view-box-height="154"
              >
                <icon-markdown />
              </icon-base>
            </a>
          </li>
          <li>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-base
                icon-name="netlify"
                :view-box-height="256"
              >
                <icon-netlify />
              </icon-base>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-sm">
      Cauê Bittencourt Carnietto © {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script>
import IconBase from '~/components/IconBase.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconVuejs from '~/components/icons/IconVuejs.vue'
import IconNuxtjs from '~/components/icons/IconNuxtjs.vue'
import IconTailwindcss from '~/components/icons/IconTailwindcss.vue'
import IconMarkdown from '~/components/icons/IconMarkdown.vue'
import IconNetlify from '~/components/icons/IconNetlify.vue'

export default {
  components: {
    IconBase,
    IconGithub,
    IconTwitter,
    IconVuejs,
    IconNuxtjs,
    IconTailwindcss,
    IconMarkdown,
    IconNetlify
  }
}
</script>

<style lang="postcss" scoped>
div > p {
  @apply text-lg;
}
</style>
