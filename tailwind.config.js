/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'causten':['Causten-Bold','sans-serif']
      },
      fontSize: {
        '24px': '24px',
      },
      lineHeight: {
        '28.8px': '28.8px',
    },
  },
},
  plugins: [],
};
