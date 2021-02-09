const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        blau: colors.blue,
        gelb: colors.yellow,
        grau: colors.blueGray,
        tuerkis: colors.cyan,
        gruen: colors.lime,
        rot: colors.rose,
      },
  
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
