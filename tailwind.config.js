// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        'primary-bg' : '#F0F1FD',
        'secondary-bg' : '#E8ECFF',
        'button-bg' : '#3E44D2',
        'shadow-bg' : '#EBECFE',
      }
    },
  },
  plugins: [],
}

