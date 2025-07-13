/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00FFFF',
        'neon-pink': '#FF00FF',
      },
      boxShadow: {
        cyan: '0 0 10px #22d3ee',
      },
      animation: {
        pulse: "pulse 1s infinite",
        'fade-in': 'fadeIn 1.5s ease-in forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
