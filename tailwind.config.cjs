/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'neopurple': '#CE7DF0',
      },
      dropShadow: {
        'block': [
          '4px 4px 0rem rgba(0, 0, 0, 1)',
        ],
        'block-thick': [
          '6px 6px 0rem rgba(0, 0, 0, 1)',
        ]
      },
      backgroundImage: {
        'home': "url('/bg1.webp')",
        'about-me': "url('/bg2.webp')",
        'projects': "url('/bg3.webp')",
      }
    },
  },
  plugins: [],
}
