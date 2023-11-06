const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./main.html'],
  theme: {
    extend: {
      backgroundImage: {
        'tractor-img': "url('/assets/images/tractor.jpg')",
        'cattle-img': "url('/assets/images/cattle.jpg')",
        'cows-img': "url('/assets/images/cows.jpg')",
        'farmland-img': "url('/assets/images/farmland.jpg')",

      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    // Adding text-shadow classes
    // so we can write something like this `<div class="text-shadow-sm shadow-red-500" ...>`
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
        { values: theme('textShadow') }
      )
    }),
  ],
}



