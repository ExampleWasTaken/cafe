/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*'],
  theme: {
    extend: {
      colors: {
        startColor: '#FF4D4D',
        endColor: '#F9CB28',
        accent: '#FC873C',
      },
    },
    fontFamily: {
      noto: ['Noto Sans', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
};
