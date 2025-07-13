/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cyber-blue": "#00bfff",
        "cyber-pink": "#ff00ff",
        "cyber-purple": "#a259ff",
        "cyber-green": "#00ff9c",
        "cyber-gold": "#ffd700",
        "cyber-cyan": "#00ffff",
        "space-dark": "#0a0a0f",
        "space-navy": "#111827",
        "neuro-surface": "#1c1f26",
        "neuro-recessed": "#0f1014",
        neon: "#39ff14",
        plasma: "#ff6ec7",
        // legacy colors
        "neon-pink": "#FF00FF",
        // Skill bar colors
        "skill-low": "#ef4444",     // red-500
        "skill-mid": "#eab308",     // yellow-500
        "skill-high": "#22c55e",    // lime-500
      },
      fontFamily: {
        mono: ["Fira Code", "Source Code Pro", "monospace"],
        futuristic: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        cyan: '0 0 10px #22d3ee',
        neon: "0 0 10px #39ff14, 0 0 20px #39ff14",
        glass: "0 4px 30px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "cyber-glow":
          "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent 80%)",
        "hero-rainbow":
          "linear-gradient(135deg, #00bfff, #a259ff, #ff00ff, #00ff9c)",
      },
      transitionDelay: {
        400: "400ms",
        600: "600ms",
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
