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
        1260: '1260px',
        598: '598px',
        170: '200px',
      },

      width: {
        330: '330px',
        219: '219px',
      },

      height: {
        440: '440px',
        280: '280px',
        85: '85px',
      },



      // padding margin
      padding: {
        75: '75px',
        60: '60px',
        50: '50px',
      },

      margin: {
        86: '86px',
        76: '76px',
        15: '60px',
      },

      space: {
        0.75: '3px',
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
        45: '45px',
        38: '38px',
        30: '30px',
        25: '25px',
        25: '25px',
        22: '22px',
      },

      letterSpacing: {
        9.5: '9.5px',
        7.6: '7.6px',
        5.5: '5.5px',
        5: '5px',
        4.5: '4.5px',
      },

      lineHeight: {
        20: '80px',
      },



      // border
      borderRadius: {
        27: '27px',
        25: '25px',
        20: '20px',
        15: '15px',
        10: '10px',
      },



      // filter
      blur: {
        150: '150px',
        80: '80px',
      },



      // z-index
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },



      // transform
      rotate: {
        102: '102deg',
        75: '75deg',
      },
      
      
      
      // background
      backgroundImage: {
        'linear-gradient_black-10': 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%)',
        'linear-turquoise': 'linear-gradient(180deg, #354264 0%, rgba(18, 31, 86, 0.21) 100%)',
      },




      // spacing top left right bottom
      spacing:{
        67: '67px',
      },
    },
  },
  plugins: [],
}