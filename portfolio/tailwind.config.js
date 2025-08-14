// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
      },
      textShadow: {
        glow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
      },
      boxShadow: {
        'all-sides': '0 0 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const shadows = theme('textShadow');
      for (const key in shadows) {
        newUtilities[`.text-shadow-${key}`] = { textShadow: shadows[key] };
      }
      addUtilities(newUtilities);
    }
  ],
};
