/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|blue|gray)-(100|200|300|600|700|800)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}