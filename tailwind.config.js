/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    container:{
      center:true,
      
    },
    extend: {
      backgroundImage:{
        'saloon': 'url("./assets/images/saloon.jpeg")',
        'temp': 'url("./assets/images/temp.jpg")',
      }
    },
  },
  plugins: [],
}