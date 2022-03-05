module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin'],
        serif: ['Space Mono']
      },
      colors: {
        primary: {
          100: '#BAF1FF',
          200: '#A8DBFF',
          300: '#96BFFF',
          400: '#859CFF',
          500: '#6631fb',
          600: '#7F64DF',
          700: '#8354BF',
          800: '#81459F',
          900: '#793680'
        }
      },
      boxShadow: {
        'lg': '0 0 15px 2px rgb(0 0 0 / 1)',
        'xl': '0 0 25px 5px rgb(0 0 0 / 1)',
        '2xl': '0 0 50px 5px rgb(0 0 0 / 1)'
      }
    },
  },
  plugins: [],
}
