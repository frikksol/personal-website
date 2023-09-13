/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Cairo', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'home': "url('/bg1.webp')",
        'about-me': "url('/bg2.webp')",
        'projects': "url('/bg3.webp')",
      }
    },
  },
  plugins: [],
}
