// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "THE/STUDIO - Dynamic Components",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "THE/STUDIO - Sead Sabanovic",
        },
        { name: "theme-color", content: "#2d5d9f" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "nuxt-icons", "@nuxt/image"],
  fonts: {
    families: [
      {
        name: "Figtree",
        weights: [400, 500, 600, 700],
      },
      {
        name: "Montserrat",
        weights: [400, 500, 600, 700],
      },
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      subsets: ["latin"],
    },
  },
  // ISR Configuration
  nitro: {
    prerender: {
      routes: ["/api/template", "/api/hero-template"],
    },
  },
  // Vercel ISR Configuration
  experimental: {
    payloadExtraction: false,
  },
});
