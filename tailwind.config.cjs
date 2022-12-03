/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.jsx'
],
  theme: {
    extend: {},
    backgroundImage: {
      'globe': "url('./assets/images/globe-2.jpg')",
      'map': "url('./assets/images/map_image.jpg')",
    }
  },
  plugins: [],
}
