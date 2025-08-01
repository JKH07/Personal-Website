/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // <--- THIS IS REQUIRED
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // <--- ALSO REQUIRED
  ],
};
