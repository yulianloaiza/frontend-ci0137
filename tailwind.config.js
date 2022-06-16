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
    require('tw-elements/dist/plugin')
  ],
}
