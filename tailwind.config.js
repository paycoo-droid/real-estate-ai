/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
      },
      colors: {
        realState: "#7c6ee4",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("tw-elements/dist/plugin.cjs"),
    require("daisyui"),
    require('tailwindcss-animated')
  ],
};
