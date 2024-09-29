/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#232323",
        "red": "#812B2B",
        "white": "#F6F5F5",
      }
    },
  },
  plugins: [],
}