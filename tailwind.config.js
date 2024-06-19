/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#F8C02D",
        Gray: {
          b1: "#181A1D",
          b2: "#1E2429",
          b3: "#3B4851",
          b4: "#B3B5B7",
          b5: "#E9E9EA",
          b6: "#FFFFFF",
        },
        Greeen: "#49DF3E",
        Red: "#BA1D1D",
        Alert: "#EE7844",
        Blue: "#155EBB",
      },
    },
  },
  plugins: [],
};
