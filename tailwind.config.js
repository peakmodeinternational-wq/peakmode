/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12213A",
        navy: "#345D92",
        steel: "#3D68A0",
        page: "#2E5486",
        cream: "#F2F5EF",
        gold: {
          DEFAULT: "#D9B45B",
          light: "#F2DC98",
          dark: "#A67C1F",
        },
        brass: "#7A5E1E",
        frost: "#9FB4D4",
        teal: "#3E8E7E",
        volt: {
          DEFAULT: "#B8F04A",
          light: "#D7FF8A",
          dark: "#8FCC2E",
        },
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