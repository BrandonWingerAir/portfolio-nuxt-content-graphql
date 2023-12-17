// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content'
  ],
  app: {
    baseURL: "/portfolio-nuxt-tailwind-graphql/"
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'html', 'css', 'java', 'json', 'bash', 'vue']
    }
  }
})