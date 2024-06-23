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
            "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        },
        {
          rel: "apple-touch-startup-image",
          href: "/splash.png",
          media:
            "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
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
      mobileAppIOS: true,
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
        {
          src: "/splash.png",
          sizes: "640x1136",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "750x1334",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "828x1792",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1125x2436",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1242x2688",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1536x2048",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1668x2224",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1674x2224",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1680x2248",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1800x3200",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1920x1080",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "2048x2732",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "2208x2208",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "2400x1600",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "2732x2732",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "2960x1440",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "3120x3920",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "3600x2000",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "375x667",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "414x896",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "768x1024",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "800x1280",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "820x1180",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1080x1920",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1112x1920",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1125x2436",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1152x2048",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1200x1920",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1260x2340",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1284x720",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1350x1920",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1366x768",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1440x2560",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1520x2800",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1560x2080",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1600x900",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1620x3240",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/splash.png",
          sizes: "1694x2250",
          type: "image/png",
          purpose: "any",
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
    appleMobileWebAppCapable: true,
  },
});
