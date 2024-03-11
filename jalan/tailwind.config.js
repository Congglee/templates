/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-100": "#daefff",
        "main-200": "#f3f3f3",
        "main-300": "#ccd4dc",
        "main-400": "#cad6e1",
        "main-500": "#778fa3",
        "main-600": "#5171f1",
        "main-700": "#fea31b",

        "secondary-400": "#475c65",
        "secondary-500": "#202930",
      },
    },
  },
  plugins: [],
};
