module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 10s ease-in-out infinite",
        shake: "shake 0.4s ease-in-out", // 👈 add this
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shake: {
          // 👈 add this
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
      },
      boxShadow: {
        text: "0 0 10px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
