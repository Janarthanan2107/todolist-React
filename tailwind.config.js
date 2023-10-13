/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: "#646ff0",
        paleBlue: "#f8f8ff",
        darkGray: "#646681",
        paleGray: "#cccdde",
        lightGray: "#ecedf6",
        listBg: "#dedfe1"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}