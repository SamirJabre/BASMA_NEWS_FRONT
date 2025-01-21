/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'richMan':"url('./src/Assets/Images/richman.png')",
        'banner':"url('./src/Assets/Images/Banner.png')",
        'newsBackground': "url('./src/Assets/Images/NewsBack.jpg')",
      }
    },
  },
  plugins: [],
};