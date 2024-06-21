/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'myFonts': 'Oleo Script'
    },
    extend: {
      backgroundImage: {
        'firstImage': "url('./components/assets/firstImage.jpg')",
        'secondImage': "url('./components/assets/secondImage.jpg')",
        'thirdImage': "url('./components/assets/thirdImage.jpg')",
        'forthImage': "url('./components/assets/forthImage.jpg')",
        'fifthImage': "url('./components/assets/fifthImage.jfif')",

      }

    },
  },
  plugins: [],
}