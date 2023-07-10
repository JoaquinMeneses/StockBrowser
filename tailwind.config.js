/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d2c60b",
        secondary: "#4a2a31",
        terciary: "#f3582d",
        neutral: "#f8eef3",
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
    },
  },

  plugins: [],
});
