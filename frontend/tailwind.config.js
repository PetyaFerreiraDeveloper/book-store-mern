/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        lightBg: "#F3F3F3",
        darkBg: "#02102e",
        favorite: "#FF5841",
        gray: "#EAEAEA",
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
