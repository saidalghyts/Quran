/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './ui/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        15: '60px',
      },
      spacing: {
        15: '60px',
      },
    },
  },
  plugins: [],
};
