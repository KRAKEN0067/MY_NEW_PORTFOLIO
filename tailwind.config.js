// tailwind.config.js
module.exports = {
  darkMode: "class",
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
    },
  },
};
