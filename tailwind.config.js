/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquesa': '#00C9D7',
        'turquesa-dark': '#00A8B5',
        'amarelo': '#FFE74C',
        'laranja': '#FF6B35',
        'rosa': '#FFB3C1',
        'cinza': '#2B2B2B',
        'cinza-claro': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

