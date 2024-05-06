/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      scale: {
        80: '0.8'
      }
    }
  },
  plugins: []
};
