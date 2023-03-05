/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#F9F9F9',
        primary: '#191919',
        'primary-orange': '#FF7010',
        'primary-orange-hover': '#FF9146',
        'primary-orange-active': '#FF6905'
      }
    },
    fontFamily: {
      'sf-pro': ['SF Pro', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
