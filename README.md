# Nuxt 3 Base Layer

Nuxt 3 preset layer for common dependencies.

> *I used to create Nuxt projects over and over again and copy these dependencies over and over again. This is seriously against the spirit of programming!*

-----

[![npm](https://img.shields.io/npm/v/@alexsun-top/nuxt-base-layer?style=flat-square)](https://www.npmjs.com/package/@alexsun-top/nuxt-base-layer)

This is a base layer for Nuxt 3 projects. No subjective configurations are included here. It includes:

- [Tailwind CSS](https://nuxt.com/modules/tailwindcss)
- [Color Mode](https://nuxt.com/modules/color-mode)
- [Pinia](https://nuxt.com/modules/pinia) & [Pinia Plugin Persistedstate](https://nuxt.com/modules/pinia-plugin-persistedstate)
- [VueUse](https://nuxt.com/modules/vueuse)
- [Nuxt i18n](https://nuxt.com/modules/i18n)
- [lodash](https://nuxt.com/modules/lodash)
- [dayjs](https://nuxt.com/modules/dayjs)
- [Nuxt Image](https://nuxt.com/modules/image)

This project is only used to constrain dependencies, so that we don't create the Nuxt project *from scratch*.

## Usage

Creating a new Nuxt project:

```bash
pnpm dlx nuxi@latest init $YOUR_PROJECT_NAME
```

Add `@alexsun-top/nuxt-base-layer` to your project:

```bash
pnpm add -D @alexsun-top/nuxt-base-layer @vueuse/core
```

Add the layer to your Nuxt project:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  extends: [
    '@alexsun-top/nuxt-base-layer',
  ],
})
```

If your dayjs goes wrong, you can add it to the `optimizeDeps`:

```bash
pnpm add -D dayjs
```

Configure `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        'dayjs',
      ],
    },
  },
})
```

## Configuration

You can disable some of the dependencies by setting the following environment variables:

| Environment Variable               | Package                             |
| ---------------------------------- | ----------------------------------- |
| `BASE_DISABLE_TAILWINDCSS`         | `@nuxtjs/tailwindcss`               |
| `BASE_DISABLE_COLORMODE`           | `@nuxtjs/color-mode`                |
| `BASE_DISABLE_ICON`                | `nuxt-icon`                         |
| `BASE_DISABLE_PINIA`               | `@pinia/nuxt`                       |
| `BASE_DISABLE_PINIAPERSISTEDSTATE` | `@pinia-plugin-persistedstate/nuxt` |
| `BASE_DISABLE_VUEUSE`              | `@vueuse/nuxt`                      |
| `BASE_DISABLE_I18N`                | `@nuxtjs/i18n`                      |
| `BASE_DISABLE_LODASH`              | `nuxt-lodash`                       |
| `BASE_DISABLE_IMAGE`               | `@nuxt/image`                       |
| `BASE_DISABLE_DAYJS`               | `dayjs-nuxt`                        |

## License

[MIT](./LICENSE).
