# Nuxt 3 base layer

I used to create Nuxt projects over and over again and copy these dependencies over and over again. This is seriously against the spirit of programming!

This is a base layer for Nuxt 3 projects. It includes:

- [x] [Tailwind CSS](https://nuxt.com/modules/tailwindcss)
- [x] [Color Mode](https://nuxt.com/modules/color-mode)
- [x] [Auto Animation](https://nuxt.com/modules/auto-animate)
- [x] [Pinia](https://nuxt.com/modules/pinia) & [Pinia Plugin Persistedstate](https://nuxt.com/modules/pinia-plugin-persistedstate)
- [x] [VueUse](https://nuxt.com/modules/vueuse)
- [x] [I18n](https://nuxt.com/modules/i18n)
- [x] [Lodash](https://nuxt.com/modules/lodash)
- [x] [Dayjs](https://nuxt.com/modules/dayjs)
- [x] [Nuxt Image](https://nuxt.com/modules/image)
- [x] [Nuxt Device](https://nuxt.com/modules/device)

No subjective configurations are included here.

This project is only used to constrain dependencies, so that we don't create the Nuxt project *from scratch*.

## Usage

Creating a new Nuxt project:

```bash
pnpm dlx nuxi@latest init $your_project_name
```

Add `@alexsun-top/nuxt-base-layer` to your project:

```bash
pnpm add -D @alexsun-top/nuxt-base-layer
```

Add the layer to your Nuxt project:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  layers: [
    '@alexsun-top/nuxt-base-layer',
  ],
})
```

## Configuration

## License

[MIT](./LICENSE).
