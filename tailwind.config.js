/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      blackHans: ['"Black Han Sans"'],
    },
    extend: {
      colors: {
        primary: '#333D51',
        second: '#CBD0D8',
        white: '#F4F3EA',
        point: '#D3AC2B',
      },
    },
  },
  plugins: [],
}
