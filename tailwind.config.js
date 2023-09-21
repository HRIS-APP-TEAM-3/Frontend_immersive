/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outline': '#E0E0E0',
        'primary' : '#165BAA',
        'secondary': '#f57390',
        'dark': '#2b2d31',
        'dark-button': '#222427',
        'dark-body': '#313338',
      }
    },
  },
  plugins: [require("daisyui")],
}

