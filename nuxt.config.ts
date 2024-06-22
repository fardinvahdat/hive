// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
