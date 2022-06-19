const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'navy-blue': '#354259',
        'brown-gold' : '#CDC2AE',
        'light-gold' : '#ECE5C7',
        'subtitle-grey' : '#858585',        
        'idle-grey' : '#F5F5F5',
        'component-shadow' : '#D6D6D6'
      },
      maxHeight: {
        '3xl': '48rem',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(function({ addUtilities }) {
      addUtilities({
        // '.no-scrollbar': {
        //   '-ms-overflow-style': 'none', /* IE and Edge */
        //   'scrollbar-width': 'none', /* Firefox */   
        // },
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
      })
    })
  ],
}
