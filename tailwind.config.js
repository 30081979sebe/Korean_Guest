/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Gold': '#E7D183',
        'Primary-Blue':'#133E87',
        'Primary-Red' : '#D31919',
        'Primary-Green':'#88D66C',
        'Primary-Purple':'#870042',
        'Primary-Black':'#000000',
        'Primary-White': '#FEFEE2',
        'Primary-White-1':'D9D9D9',
        'korea-blue':'133E87'
      },
    },
  
  },
  plugins: [],
}

