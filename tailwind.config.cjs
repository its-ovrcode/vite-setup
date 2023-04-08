/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Goshco', 'sans-serif'],
        sans: ['Google Sans Regular', 'sans-serif'],
        bold: ['Google Sans Bold', 'sans-serif'],
        medium: ['Google Sans Medium', 'sans-serif'],
      },
      colors: {
        primary: '#AA57D7',
        dark: '#202020',
        lightPink: '#AA57D7',
        thePink: '#E8A5FF',
      },
    },
  },
  plugins: [],
};

colors = [
  // #F7B84B, #BB67E8 , #EB5757 , #E8A5FF, #7DA0FA,##67E8BA
];
