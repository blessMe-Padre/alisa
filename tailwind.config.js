/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      // ---------------------------------
      'main-black': '#262626',
      'default-black': '#000000',
      'light-black': '#5E5D5C',
      'light-gray': '#F3F3F7',
      'light-blue': '#93AAD6',
      'blue': '#00ADFF',
      'green': '#A3CD39',
      'pink': '#F8128E',
      'orange': '#F9AD00',
      'yellow': '#fff8db;',
    },
    extend: {
      fontFamily: {
        'bodyFont': ['toony_loons_rus', 'regular'],
      }
    }
  },
  plugins: [],
}

