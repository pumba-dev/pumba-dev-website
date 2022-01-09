module.exports = {
  mode: 'jit',
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'body': ['"Baloo Bhaijaan 2"']
    },
    colors: {
      'blue': '#405ABA',
      'disable-blue': '#6C6F9B',
      'dark-blue': '#141C3A',
      'white': '#FFF',
      'white-gray': '#f7f7f7',
      'gray': '#717689',
      'gray-blue': '#D8DEF2'
    },
    extend: {
      spacing: {
        '180': '40rem'
      }
    },
  },
  plugins: [],
}
