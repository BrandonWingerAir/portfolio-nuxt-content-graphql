export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-simple-robots'
  ],
  site: { indexable: false },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/'
    },
    githubToken: process.env.GH_TOKEN
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