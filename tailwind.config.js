const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './*.vue'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Prata', ...defaultTheme.fontFamily.serif],
        prata: ['Prata'],
      },
      colors: {
        'pale-leaf': {
          50: '#fcfdfc',
          100: '#f8faf8',
          200: '#eef3ee',
          300: '#e4ece3',
          400: '#cfddcf',
          500: '#bbcfba',
          600: '#a8baa7',
          700: '#8c9b8c',
          800: '#707c70',
          900: '#5c655b',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
