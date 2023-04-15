/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Hanken-Grotesk": ['"Roboto"', 'Arial', 'Helvetica', 'sans-serif']
    },
    colors: {
      // Primary
      "Home-Bg": "rgb(246,248,252)",
      "White": "rgb(255,255,255)",
      "Input-Bg": "rgb(234,241,251)",
      "Placeholder-Text": "rgb(103,103,104)",

      "Base-Text": "rgb(42,42,42)",
      "Tab-Blue": "rgb(11,87,208)",
      "Light-Blue": "rgb(194,231,255)",
      "Bright-Blue": "rgb(242,246,252)",
      "Active-Blue": "rgb(211,227,253)",

      "Dark-Blue": "rgb(11,87,208)",
      "Active-Text": "rgb(0,29,53)",
      "Black": "rgb(0,0,0)",

      // Neutral
      "Read-Bg": "rgb(242,246,252)",

      "Unread-Text-Black": "rgb(148,151,156)",
      "Read-Text-Black": "rgb(136,138,143)",
      "Light-Text-Black": "rgb(78,79,82)",

      "Unread-Text-White": "rgb(244,244,246)",
      "Read-Text-White": "rgb(222,224,228)",

      "FA-Dark": "rgb(95,99,104)",
      "FA-Hover": "rgb(235,236,236)",

      "Loading-Bg": "rgb(249,237,190)",
      "Loading-Border": "rgb(240,195,109)"
    }
  },
  plugins: []
}
