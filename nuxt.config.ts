// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // UI & Style
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',

    // Animation
    '@formkit/auto-animate/nuxt',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',

    // I18n
    '@nuxtjs/i18n',

    // Utils
    'nuxt-lodash',
    '@nuxt/image',
    '@nuxtjs/device',
    'dayjs-nuxt',
  ],
})
