// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-up-loop': 'scrollUpLoop 20s linear infinite',
        'scroll-down-loop': 'scrollDownLoop 20s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'marquee-x': 'marqueeX 20s linear infinite',
      },
      keyframes: {
        scrollUpLoop: {
          '0%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(-203%)' },
        },
        scrollDownLoop: {
          '0%': { transform: 'translateY(-203%)' },
          '100%': { transform: 'translateY(-3%)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-628%)' },
        },
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}
