/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Brand Gold
        'brand-gold-tint': '#faf6eb',
        'brand-gold-lightest': '#e2cf9c',
        'brand-gold-lighter': '#d1b96b',
        'brand-gold-light': '#c19f39',
        'brand-gold': '#b2892e',
        'brand-gold-dark': '#7d6026',
        'brand-gold-darker': '#6b5422',
        'brand-gold-darkest': '#5a461b',

        //Brand Red
        'brand-red-tint': '#feecec',
        'brand-red-lightest': '#ed999a',
        'brand-red-lighter': '#e66667',
        'brand-red-light': '#dd3432',
        'brand-red': '#d22026',
        'brand-red-dark': '#941a1d',
        'brand-red-darker': '#7d1416',
        'brand-red-darkest': '#680c0c',

        //Brand MidBlue
        'brand-midblue-tint': '#ebf2f7',
        'brand-midblue-lightest': '#9abdd7',
        'brand-midblue-lighter': '#669cc4',
        'brand-midblue-light': '#347baf',
        'brand-midblue': '#005a9c',
        'brand-midblue-dark': '#14416c',
        'brand-midblue-darker': '#13375d',
        'brand-midblue-darkest': '#0c2e4d',

        //Brand Navy
        'brand-darkblue-tint': '#eceeef',
        'brand-darkblue-lightest': '#9ea8ae',
        'brand-darkblue-lighter': '#707c86',
        'brand-darkblue-light': '#40525e',
        'brand-darkblue': '#102535',
        'brand-darkblue-dark': '#0d1a25',
        'brand-darkblue-darker': '#0d1821',
        'brand-darkblue-darkest': '#0d151c',

      }
    },
  },
  plugins: [],
}
