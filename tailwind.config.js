/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/script.js"
  ],
  theme: {
    extend: {
      screens: {
        'mobileM': "375px",
        'mobileL': "425px",
        'tablet': "768px",
        'laptop': "1024px",
        'laptopL': "1440px",
      }
    },
  },
  plugins: [],
}

