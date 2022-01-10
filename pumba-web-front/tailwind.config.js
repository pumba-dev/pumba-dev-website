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
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'halffull': '50px',
    },
    extend: {
      spacing: {
        '180': '40rem',
        '500': '31.25rem',
        '550': '34.375rem',
        '600': '37.5rem',
        '650': '40.625rem',
        '700': '43.75rem',
        '750': '46.875rem',
        '800': '50rem',
        '850': '53.125rem',
        '900': '56.25rem',
        '950': '59.375rem',
        '500-': '-31.25rem',
        '550-': '-34.375rem',
        '600-': '-37.5rem',
        '650-': '-40.625rem',
        '700-': '-43.75rem',
        '750-': '-46.875rem',
        '800-': '-50rem',
        '850-': '-53.125rem',
        '900-': '-56.25rem',
        '950-': '-59.375rem',
      }
    },
  },
  plugins: [],
}
