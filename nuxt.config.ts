// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-12',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'cloudflare-pages',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: [
    'nuxt-security',
    '@nuxt/ui',
    '@nuxt/image',
    'nitro-cloudflare-dev',
  ],

  image: {
    cloudflare: {
      baseURL: 'https://that-test.site'
    }
  }
})