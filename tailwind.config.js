/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-up': 'scrollUp 20s linear infinite',
        'scroll-down': 'scrollDown 20s linear infinite',
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(-218%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-218%)' },
          '100%': { transform: 'translateY(-20%)' },
        },
      },
    }    
  },
  plugins: [],
}
