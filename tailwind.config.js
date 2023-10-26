/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',],
  theme: {
    extend: {
      backgroundImage: {
        'tractor-img': "url('/assets/images/tractor.jpg')",
        'cattle-img': "url('/assets/images/cattle.jpg')",
        'cows-img': "url('/assets/images/cows.jpg')",
        'farmland-img': "url('/assets/images/farmland.jpg')",

      }
    },
  },
  plugins: [],
}

