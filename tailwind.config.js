/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {/*style part can here also*/
    colors:{
      "primary":"#010851",
      "secondary":"#9A7AF1",
      "tartiary":"#707070",
      "pink":"#EE9AE5",
      "dark-purple":"#081A51",
      "light-white":"rgba(255,255,255,0.17)",
      glass:"rgba(255,255,255,0.25)",
      brown:"rgb(30,30,17)"
    },

    boxShadow: {
      '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
    
   
  
  },
  },
  plugins: [],
}

