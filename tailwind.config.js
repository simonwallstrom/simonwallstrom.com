const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './data/**/*.js'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.emerald,
      yellow: colors.yellow,
      red: colors.rose,
      pink: colors.pink,
      teal: colors.teal,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '1.9rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.5rem', { lineHeight: '2.7rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      colors: {
        gray: {
          75: '#f7f7f9',
          1000: '#0A0A0A',
        },
      },
      boxShadow: {
        '3xl':
          '0 0.6px 0.9px rgba(0, 0, 0, 0.06), 0 1.8px 2.5px rgba(0, 0, 0, 0.039), 0 4.2px 6px rgba(0, 0, 0, 0.03), 0 14px 20px rgba(0, 0, 0, 0.021)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active', 'dark'],
      borderStyle: ['hover', 'dark'],
      backgroundColor: ['active'],
      position: ['focus'],
    },
  },
  plugins: [require('tailwindcss-line-clamp')],
};
