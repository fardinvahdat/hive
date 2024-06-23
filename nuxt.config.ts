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
          media:
            "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
        },
      ],
      meta: [
        {
          name: "theme-color",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "PWA Splash",
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
