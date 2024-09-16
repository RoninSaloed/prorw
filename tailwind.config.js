/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cormorant: ["Cormorant Garamond", "sans-serif"],
      onest: ["Onest", "sans-serif"],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
