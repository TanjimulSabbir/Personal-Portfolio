/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '800px',
      'mid-lg': '1000px',
      'lg': '1200px',
      'xl': '1460px',
      '2xl': '1660px',
    },
    extend: {
      colors: {
        custom: {
          PrimaryColor: '#ccd6f6',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
