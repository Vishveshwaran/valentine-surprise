/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dreamy: {
          100: '#ffe4e6', // rose-100
          200: '#fecdd3', // rose-200
          300: '#fda4af', // rose-300
          400: '#fb7185', // rose-400
          500: '#f43f5e', // rose-500
          600: '#e11d48', // rose-600
        }
      },
      fontFamily: {
        surreal: ['"Outfit"', 'sans-serif'],
        handwriting: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
