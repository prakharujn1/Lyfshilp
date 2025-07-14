module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
  sigmar: ['"Sigmar One"', 'cursive'],
},

      animation: {
        aurora: "aurora 10s ease-in-out infinite",
        shake: "shake 0.4s ease-in-out", // 👈 add this
        growShrink: 'grow-shrink 2.6s linear',
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
        growShrink: {
          '0%': { transform: 'scale(1)' },
          '3.8%': { transform: 'scale(1.2)' }, // 100ms
          '80.8%': { transform: 'scale(1.2)' }, // 2100ms
          '100%': { transform: 'scale(1)' } // 2600ms
        },
      },
      boxShadow: {
        text: "0 0 10px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
