/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  mode: 'jit',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      height: {
        'login-card': '18.813rem',
      },
      colors: {
        login: {
          blue: '#00F',
          'dark-blue': '#00002e',
          green: '#005554',
          'light-yellow': '#fff63a',
          'text-yellow': '#F6CB92',
          yellow: '#FFF0D6',
          pink: '#FF8BFF',
          purple: '#28044a',
          'light-green': '#7df178',
          'button-bg': 'rgba(120, 120, 130, 0.36)',
          'button-bg-hover': 'rgba(120, 120, 130, 0.30)',
          'button-border': '#38383A',
        },
      },
      fontFamily: {
        bold: ['SFProRounded-Bold'],
        black: ['SFProRounded-Black'],
        heavy: ['SFProRounded-Heavy'],
        light: ['SFProRounded-Light'],
        medium: ['SFProRounded-Medium'],
        normal: ['SFProRounded-Regular'],
        semibold: ['SFProRounded-Semibold'],
        thin: ['SFProRounded-Thin'],
        ultralight: ['SFProRounded-Ultralight'],
      },
    },
  },
  plugins: [],
};
