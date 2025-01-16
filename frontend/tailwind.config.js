/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E89058',
        // secondary: '#39B1CC',
        danger: '#FF5722',
        success: '#4CAF50',
        warning: '#FFC107',
        info: '#673AB7',
        base: '#f0ead250'
      },
    },
  },
  plugins: [],
}