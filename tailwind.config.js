/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C206C',
        secondary: '#44A0D3',
        black: 'rgb(12 10 9 / 1)',
        absolute: '#000'
      },
    },
  },
  plugins: [],
};
