// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "THE/STUDIO - Dynamic Components",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "THE/STUDIO - Sead Sabanovic",
        },
        { name: "theme-color", content: "#2d5d9f" },
      ],
      // Optimized Google Fonts - only what we need
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400&family=Montserrat:wght@400;500;600&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "@nuxt/image"],
  // ISR Configuration - Vercel compatible
  // Note: prerender routes removed for Vercel compatibility
  // ISR will still work via routeRules
  // Route Rules for ISR
  routeRules: {
    "/api/products-template": {
      isr: 3600, // Revalidate every hour
    },
    "/api/hero-template": {
      isr: 3600,
    },
    "/api/template": {
      isr: 3600,
    },
    "/products": {
      isr: 3600,
    },
    "/hero": {
      isr: 3600,
    },
    "/": {
      isr: 3600,
    },
  },
  // Vercel ISR Configuration
  experimental: {
    payloadExtraction: false,
  },

  // Vercel specific configuration
  nitro: {
    // Enable static generation for Vercel compatibility
    static: true,
    // Removed preset: 'vercel' to avoid symlink issues
    // ISR will work via routeRules
  },
});
