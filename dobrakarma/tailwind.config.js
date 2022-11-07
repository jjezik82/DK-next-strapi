/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://www.dobra-karma.sk/themes/dobra-karma/assets/images/hero-02-min.jpg')",
        'hero-pattern2': "url('../public/img/hero2.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#02979E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
