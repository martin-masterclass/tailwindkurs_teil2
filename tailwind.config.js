
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            }, 
          },
        },
      }),
    },
    container: {
      center: true,
          padding: {
            DEFAULT: '0.5rem',
            sm: '1rem',
            lg: '2rem',
            xl: '4rem',
            '2xl' : '8rem',
          },
        },    
  },  
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
  presets: [
    require('./heute_styles')
  ],
}
