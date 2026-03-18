/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5faeb',
          100: '#eaf4d3',
          200: '#d4e9a7',
          300: '#b8d96e',
          400: '#9DC83A',
          500: '#8DC000',
          600: '#72a000',
          700: '#567800',
          800: '#3f5800',
          900: '#2a3a00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
