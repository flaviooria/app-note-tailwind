/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#50577A',
        'secondary': '#6B728E',
        
      },
      fontFamily: {
        'nanum': ['Nanum Pen Script', 'cursive'],
        'marker': ['Permanent Marker', 'cursive']
      }
    },
  },
  plugins: [],
}
