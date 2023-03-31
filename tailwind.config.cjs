/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        borderButton: '#8257e5',
        borderMenuItem: '#29292e'
      },
    },
  },
  plugins: [],
}
