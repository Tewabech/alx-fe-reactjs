// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
    './public/index.html',
  ],
  darkMode: 'class', // Options: 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};