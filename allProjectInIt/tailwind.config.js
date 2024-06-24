/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "porfolio": "Oleo Script",
    },
    extend: {
      backgroundImage : {
        'heroImg': "url('./assets/bgImage.jpg')",
        // "3d_bgImage":"url('./assest/3dImage.jpg')"
      }
    },
  },
  plugins: [],
}