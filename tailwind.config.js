/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charmonman: ['"Charmonman"', "cursive"], // Add this line for the Charmonman font
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
