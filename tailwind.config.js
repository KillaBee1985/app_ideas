
//process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./apps/**/*.{html,ts,css,scss,sass,less,styl}', './libs/**/*.{html,ts,css,scss,sass,less,styl}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};