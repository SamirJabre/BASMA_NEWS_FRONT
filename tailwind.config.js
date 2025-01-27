/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'theSans': ['TheSansPlain', 'sans-serif'],
      'cairo': ['Cairo', 'sans-serif'],
      'messiri': ['Messiri', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'richManEng':"url('./src/Assets/Images/richManEng.png')",
        'richMan':"url('./src/Assets/Images/richman.png')",
        'background':"url('./src/Assets/Images/background.png')",
        'banner':"url('./src/Assets/Images/Banner.png')",
        'newsBackground': "url('./src/Assets/Images/NewsBack.jpg')",
        'libraryImg':"url('./src/Assets/Images/libraryImg.jpg')",
        'background2':"url('./src/Assets/Images/background2.jpg')",
      }
    },
  },
  plugins: [],
};