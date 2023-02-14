/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#81CFD1",
        second: "#BDD1D4",
      },
      fontFamily: {
        NanumSquareNeo: ["NanumSquareNeo-Variable"],

        MuseoModerno: ["MuseoModerno", "cursive"],
      },
    },
    fontSize: {
      "2xs": "8px",
      xs: "12px",
      sm: "14",
      m: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "28px",
      "3xl": "30px",
      "4xl": "35px",
      "5xl": "40px",
    },
  },
  plugins: [],
};
