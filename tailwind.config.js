/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        navy: "#0C1322",
        steel: "#26334F",
        gold: {
          DEFAULT: "#D9B45B",
          light: "#F2DC98",
          dark: "#A67C1F",
        },
        brass: "#7A5E1E",
        frost: "#9FB4D4",
        teal: "#3E8E7E",
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};