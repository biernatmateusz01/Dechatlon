// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      colors: {
        green: {
          light: "#C2EFD4",
          medium: "#267D49",
          dark: "#224F34",
          DEFAULT: "#6BC785",
        },
        accent: {
          dark: "#DC8C00",
          DEFAULT: "#EFA523",
        },
      },
      boxShadow: {
        base: "0 16px 24px 0 rgba(0, 0, 0, 0.2)",
        "inner-helper": "inset 0 0 8px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }