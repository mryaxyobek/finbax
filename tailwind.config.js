/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'blue-950': '#131333',
          'blue-800': '#00227B',
          'blue-600': '#1144FA',
          'skyblue-600': '#3949AB',
        },
        secondary: {
          'orange-500': '#FF6A61',
          'yellow-500': '#FFE600',
          'slate-500': '#2F4858',
        },
      },
    },
    screens: {
      '900': '900px',
    }
  },
  plugins: [],
}