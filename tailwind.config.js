module.exports = {
  theme: {
    extend: {
      colors: {
        theme: '#f4f4f4',
        'gray-100': '#f8f8f8',
        'gray-500': '#707070',
        'green-500': '#74b430',
        'green-300': '#7fbf3a',
      },
      fontFamily: {
        'nahdi': [ 'Nahdi' ],
        'nahdi-bold': [ 'NahdiBold'] ,
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwind-forms')(),
  ],
}
