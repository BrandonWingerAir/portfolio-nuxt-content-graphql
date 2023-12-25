// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    githubToken: process.env.GH_TOKEN
  },
  app: {
    baseURL: "/portfolio-nuxt-tailwind-graphql/"
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['html', 'css', 'js', 'ts', 'json', 'bash', 'vue', 'java']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  }
})