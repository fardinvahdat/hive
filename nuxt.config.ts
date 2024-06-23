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
        // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
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
            "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
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
            "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
        },
      ],
      meta: [
        {
          name: "theme-color",
        },
        // { charset: "utf-8" },
        // {
        //   name: "viewport",
        //   content: "initial-scale=1.0, user-scalable=no, width=device-width",
        // },
        // { name: "mobile-web-app-capable", content: "yes" },
        // { name: "apple-touch-fullscreen", content: "yes" },
        // { name: "apple-mobile-web-app-capable", content: "yes" },
      ],
      // {
      //   rel: "manifest",
      //   href: "/manifest.json",
      // },
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
