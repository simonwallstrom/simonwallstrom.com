const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '1.8rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.15rem' }],
      '4xl': ['2rem', { lineHeight: '1.1' }],
      '5xl': ['2.5rem', { lineHeight: '1.1' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.trueGray,
      blue: colors.blue,
      green: colors.green,
      red: colors.rose,
      teal: colors.teal,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-line-clamp')],
};
