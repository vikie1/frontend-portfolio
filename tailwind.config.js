// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '12/13': '99.5%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
