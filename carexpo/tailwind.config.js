/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'repeating-linear-gradient( 45deg, #444cf7, #444cf7 15px, #e5e5f7 5px, #e5e5f7 25px )',
      }
    },
  },
  plugins: [],
}
