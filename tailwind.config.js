/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charmonman: ['"Charmonman"', "cursive"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
