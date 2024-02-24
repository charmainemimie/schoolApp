/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports= {
  content: [  "./src/**/*.{js,jsx,ts,tsx}", 
   'node_modules/flowbite-react/lib/esm/**/*.js',],
  
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}