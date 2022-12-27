/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E4105D",
        secondary: "#8647AD",
        background: "#1E192C"
      }
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
}