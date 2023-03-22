/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Hanken-Grotesk": ['"Hanken Grotesk"', 'sans-serif']
    },
    colors: {
      // Primary
      "Home-Blue": "rgb(85,104,138)",
      "Mail-White": "rgb(255,255,255)",
      "Base-Text": "rgb(42,42,42)",
      "Tab-Blue": "rgb(11,87,208)",

      // Neutral
      "Unread-Bg": "rgb(221,225,232)",
      "Read-Bg": "rgb(201,205,211)",

      "Unread-Text-Black": "rgb(148,151,156)",
      "Read-Text-Black": "rgb(136,138,143)",
      "Light-Text-Black": "rgb(201,205,211)",

      "Unread-Text-White": "rgb(244,244,246)",
      "Read-Text-White": "rgb(222,224,228)",
      "FA-White": "rgb(233,235,240)",

      // Gradient
      "Gradient-One": "rgb(182,43,45)",
      "Gradient-Two": "rgb(68,129,230)",
    }
  },
  plugins: []
}
