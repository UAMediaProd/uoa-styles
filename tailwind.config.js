/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#d40000',

        'brand-midblue': '#005a9c',
        'brand-midblue-dark': '#003f6d',

        'brand-darkblue': '#102535',

        'brand-gold': '#b38808',
      }
    },
  },
  plugins: [],
}
