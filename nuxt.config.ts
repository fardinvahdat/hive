// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // buildAssetsDir: "/something/",
    head: {
      // htmlAttrs: { dir: "rtl", lang: "fa" },
      link: [
        {
          rel: "apple-touch-icon",
          href: "/favicon.ico",
          sizes: "180x180",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
        },
      ],
      meta: [
        {
          name: "theme-color",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-highcharts",
    "@element-plus/nuxt",
    "@vite-pwa/nuxt",
  ],
  routeRules: {
    "/": { prerender: true, redirect: "/dashboard" },
    "/dashboard": { prerender: true, swr: true },
  },
  pwa: {
    /* PWA options */
    meta: {
      theme_color: "#181A1D", // Set your desired theme color here
      name: "Hive",
      author: "Hive",
      mobileAppIOS: false,
    },
    manifest: {
      name: "Hive",
      short_name: "Hive",
      description: "Hive PWA",
      theme_color: "#181A1D",
      icons: [
        {
          src: "favicon.ico",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "favicon.ico",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "favicon.ico",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "favicon.ico",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/dashboard", // Fallback to index.html
      globPatterns: [
        "**/*.{js,css,html,png,jpg,jpeg,svg,woff2,woff,ttf,eot,webmanifest}",
      ],
    },
    client: {
      installPrompt: true,
    },
    registerWebManifestInRouteRules: true,
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/$/],
      navigateFallback: "/dashboard",
    },
    registerType: "autoUpdate",
    icon: {
      iosSizes: [],
    },
  },
});
