/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a1f1a',
        'forest-light': '#2a332a',
        moss: '#2f3a2f',
        bark: '#3b2f29',
        amberwood: '#b7791f',
        'bark-light': '#4a423a',
      },
    },
  },
  plugins: [],
};
