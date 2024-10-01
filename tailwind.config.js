/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS files in the src folder
    "./pages/**/*.{js,ts,jsx,tsx}", // If you have a pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
