/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '3px 3px 0px 0px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'Gold': '#E7D183',
        'Primary-Blue':'#2759A3',
        'Primary-Red' : '#D31919',
        'Primary-Green':'#88D66C',
        'Primary-Purple':'#870042',
        'Primary-Black':'#000000',
        'Primay-White': '#F7F7F7'
      },
    },
  
  },
  plugins: [],
}

