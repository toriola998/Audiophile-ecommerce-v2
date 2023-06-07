// /** //@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`
  ],
  theme: {
    extend: {},
    colors: {
      'deep-orange': '#D87D4A',
      'light-orange': '#FBAF85',
      'dark': '#101010',
      'dark-1': '#191919',
      'black': '#000000',
      'light': '#FFFFFF',
      'grey-1': '#F1F1F1',
      'grey-2': '#FAFAFA',
    },
    // fontFamily: {
    //   sans: ['Manrope', 'sans-serif'],
    // },
  },
  plugins: [],
}

