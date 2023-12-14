/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          'dark': '#111',
        },
        secondary:{
          'red': '',
        },
      },
    },
    screens:{
      '900': '900px',
    }
  },
  plugins: [],
}