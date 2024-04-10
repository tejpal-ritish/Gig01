/** @type {import('tailwindcss').Config} */

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Replace 'sans' with 'Roboto', make sure it's available
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
