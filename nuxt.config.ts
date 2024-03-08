import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // UI & Style
    (!process.env.BASE_DISABLE_TAILWINDCSS || undefined) && '@nuxtjs/tailwindcss',
    (!process.env.BASE_DISABLE_COLORMODE || undefined) && '@nuxtjs/color-mode',
    (!process.env.BASE_DISABLE_ICON || undefined) && 'nuxt-icon',

    // Animation
    (!process.env.BASE_DISABLE_ANIMATE || undefined) && '@formkit/auto-animate/nuxt',

    // State management
    (!process.env.BASE_DISABLE_PINIA || undefined) && '@pinia/nuxt',
    (!process.env.BASE_DISABLE_PINIAPERSISTEDSTATE || undefined) && '@pinia-plugin-persistedstate/nuxt',

    // Composables
    (!process.env.BASE_DISABLE_VUEUSE || undefined) && '@vueuse/nuxt',

    // I18n
    (!process.env.BASE_DISABLE_I18N || undefined) && '@nuxtjs/i18n',

    // Utils
    (!process.env.BASE_DISABLE_LODASH || undefined) && 'nuxt-lodash',
    (!process.env.BASE_DISABLE_IMAGE || undefined) && '@nuxt/image',
    (!process.env.BASE_DISABLE_DEVICE || undefined) && '@nuxtjs/device',
    (!process.env.BASE_DISABLE_DAYJS || undefined) && 'dayjs-nuxt',
  ],
})
