export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'theme-color',
          content: '#10b981'
        }
      ]
    }
  }
})
