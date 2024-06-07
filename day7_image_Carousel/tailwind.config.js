/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'secondImage': "url('./assets/secondImage.jpg')",
        'firstImage': "url('./assets/firstImage.jpg')",
        'thirdImage': "url('./assets/thirdImage.jpg')",
      }
    },
  },
  plugins: [],
}