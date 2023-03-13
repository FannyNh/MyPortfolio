import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix',
        defaultLocale: 'fr',
        langDir: 'locales/',
        locales: [
          {
            code: 'fr',
            iso: 'fr-fr',
            name: 'Français',
            file: 'fr-FR.json'
          }, {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en-US.json'
          },
        ],

        vueI18n: {
          fallbackLocale: 'fr'
        }
      }
    ]
  ],
  css: [
    '@/assets/css/tailwind.scss'
  ],
  devServerHandlers: []
})
