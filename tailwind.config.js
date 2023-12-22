/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {backgroundImage: function (theme) {
      return {
        'custom-image': "url('./public/background.png')",
      };
    },},
  },
  plugins: [],
}
