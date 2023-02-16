/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: '#81CFD1',
        second: '#BDD1D4',
        textGray: '#6D9399',
        textBlack: '#0C3547',
        textRed: '#D76A6A',
        textYellow: '#FFE194',
        textAsh: '#D9D9D9',
      },
      fontFamily: {
        NanumSquareNeo: ['NanumSquareNeo-Variable'],

        MuseoModerno: ['MuseoModerno', 'cursive'],
      },
    },
    fontSize: {
      '2xs': '8px',
      xs: '12px',
      sm: '14',
      m: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '35px',
      '5xl': '40px',
    },
    backgroundImage: {
      addfood: 'url(/src/assets/images/icon/add_food.png)',
      food: 'url(/src/assets/images/icon/icon_b_food.png)',
    },
  },
  plugins: [],
};

