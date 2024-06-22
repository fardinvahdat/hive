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
          href: "/static/icon.png",
          sizes: "180x180",
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
  modules: ["@pinia/nuxt", "nuxt-highcharts", "@element-plus/nuxt"],
  buildModules: ["@nuxtjs/pwa"],
  routeRules: {
    "/": { redirect: "/dashboard" },
  },
  pwa: {
    icon: true,
    meta: {
      /* meta options */
    },
    name: "Hive",
    author: "Hive Team",
    theme_color: "#181A1D",
    manifest: {
      name: "Hive App",
      lang: "en",
      useWebmanifestExtension: false,
    },
  },
});
