/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'newsBackground': "url('./src/Assets/Images/NewsBack.jpg')",
      }
    },
  },
  plugins: [],
};