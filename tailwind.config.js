/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      blackHans: ['"Black Han Sans"'],
    },
    extend: {
      colors: {
        primary: '#333D51',
        cardbg: '#333240',
        second: '#CBD0D8',
        white: '#F4F3EA',
        point: '#D3AC2B',
        selected: '#528f5d',
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
}
