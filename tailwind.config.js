/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        dancing: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
