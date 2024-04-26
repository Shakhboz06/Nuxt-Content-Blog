// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5006
  },
  app:{
    pageTransition: {
      name: 'vue',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: {
        default: 'github-dark-default',
        dark: 'min-dark'
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
