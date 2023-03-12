/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#F9F9F9',
        primary: '#FF7010',
        'primary-light': '#FF9146',
        'primary-more-light': '#FFEEE2',
        'primary-dark': '#FF6905',
        secondary: '#191919',
        red: '#E23535',
        gray: '#F0F0F0'
      }
    },
    fontFamily: {
      'sf-pro': ['SF Pro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
