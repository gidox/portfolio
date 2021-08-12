module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      lineHeight: {

        'extra-loose': '120%',

       },
       colors: {
        yellow: {
          '100': '#fbc27d',
          '300': '#f58a07'

        },
        gray: {
          800: '#333333'
        },
        purple: {
          300: '#6f59b3',
          600: '#452c92'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
