/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      900: '900px',
    },
    extend: {
      // colors
      colors: {
        primary: {
          blue: {
            950: '#131333',
            800: '#00227B',
            600: '#1144FA',
          },
          sky: {
            600: '#3949AB',
          }
        },

        secondary: {
          orange: {
            500: '#FF6A61',
          },
          yellow: {
            500: '#FFE600',
          },
          slate: {
            500: '#2F4858',
          },
        },
      },



      // size (width, height, max, min)
      maxWidth: {
        1320: '1320px',
      },
      width: {
        219: '219px',
      },
      height: {
        85: '85px',
      },



      // font
      fontFamily: {
        'gilroy-bold': ['gilroy-bold', 'sans-serif'],
        'gilroy-semibold': ['gilroy-semibold', 'sans-serif'],
        'gilroy-medium': ['gilroy-medium', 'sans-serif'],
        'gilroy-regular': ['gilroy-regular', 'sans-serif'],
      },

      fontSize: {
        80: '80px',
        38: '38px',
        25: '25px',
        25: '25px',
        22: '22px',
      },

      letterSpacing: {
        9.5: '9.5px',
      },



      // border
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [],
}