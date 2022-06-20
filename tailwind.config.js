const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#354259",
        "brown-gold": "#CDC2AE",
        "light-gold": "#ECE5C7",
        "subtitle-grey": "#858585",
        "idle-grey": "#F5F5F5",
        "component-shadow": "#D6D6D6",
      },
      maxHeight: {
        "3xl": "48rem",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    plugin(function ({ addUtilities }) {
      addUtilities({        
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".carousel .carousel-indicators .active": {
          "background-color": "#354259",
        },

        /* .carousel .carousel-indicators li {
        background-color: #fff000 !important;
        background-color: rgba(227, 22, 22, 0.25) !important;
        border-color: #354259
      } */
      });
    }),
  ],
};
