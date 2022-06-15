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
        'idle-grey' : '#F5F5F5'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
