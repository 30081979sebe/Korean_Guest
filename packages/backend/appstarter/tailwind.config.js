/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./application/views/**/*.php", // Vues PHP dans CodeIgniter
    "./public/**/*.html"           // Autres fichiers HTML si nécessaires
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

