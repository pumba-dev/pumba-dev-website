module.exports = {
  mode: 'jit',
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'body': ['"Baloo Bhaijaan 2"']
    },
    colors: {
      'black': '#000',
      'blue': '#405ABA',
      'disable-blue': '#6C6F9B',
      'dark-blue': '#141C3A',
      'white': '#FFF',
      'white-gray': '#f7f7f7',
      'gray': '#717689',
      'gray-blue': '#D8DEF2',
      'orange-red': '#FF4700',
      'orange': '#E69E19',
      'green': '#5ccd32',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xlarge': '24px',
      '2xlarge': '48px',
    },
    screens: {
      '2xs': '375px',
      // => @media (min-width: 375px) { ... }

      'xs': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '200': '12.5rem',
        '250': '15.625rem',
        '300': '18.75rem',
        '350': '21.875rem',
        '400': '25rem',
        '450': '28.125rem',
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
      },
      animation: {
        'carousel': 'carouselleft 40s linear infinite'
      }
    },
  },
  plugins: [],
}
