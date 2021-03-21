const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
   container: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      screens: {
          'tablet' : '640px',
          'computer' : '1000px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        blau: colors.blue,
        gelb: colors.yellow,
        gray: colors.blueGray,
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
    function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            '@screen computer': {
              maxWidth: '1140px',
            },
          }
        })
      }
  ],
}
