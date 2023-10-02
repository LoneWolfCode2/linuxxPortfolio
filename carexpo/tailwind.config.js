/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        specialDark: "0 5px 20px 1px rgba(255,255,255,0.3)",
      },
      backgroundImage: {
        "gradient-radial":
          "repeating-linear-gradient( 45deg, #444cf7, #444cf7 15px, #e5e5f7 5px, #e5e5f7 25px )",
      },
    },
  },
  plugins: [],
};
