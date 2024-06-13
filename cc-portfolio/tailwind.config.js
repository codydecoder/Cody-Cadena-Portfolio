/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ['"League Spartan"', "sans-serif"],
        play: ['"Play"', "sans-serif"],
        rajdhani: ['"Rajdhani"', "sans-serif"],
        playfairDisplay: ['"Playfair Display"', "serif"]
      }
    },
  },
  plugins: [],
}
