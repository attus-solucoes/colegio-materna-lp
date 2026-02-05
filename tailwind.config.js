/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta baseada no logo
        'turquesa': '#5DBEB3',
        'turquesa-dark': '#4BA89E',
        'azul-claro': '#7ECCE4',
        'amarelo': '#F7E55B',
        'rosa': '#F4B5C4',
        'cinza': '#4A4A4A',
        'cinza-claro': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

