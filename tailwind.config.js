/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 5px 2px rgba(0, 0, 0, 0.3)',
        '4xl': '0 0px 40px 20px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

