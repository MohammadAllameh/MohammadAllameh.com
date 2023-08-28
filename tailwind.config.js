/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode : 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors : {
        red2 : {
          100: '#E74646'
        },
        'gray2' : '#884A39',
        'boworn2' : '#C38154',
        'gold2' : '#FFC26F',
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')

  ],
}

