// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
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
    'nitro-cloudflare-dev',
    '@nuxt/ui',
    '@nuxt/image',
  ],

  image: {
    cloudflare: {
      baseURL: 'https://that-test.site'
    }
  }
})