    /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minimal: ["Orbitron", "sans-serif"],
        classic: ["Lora", "serif"],
        antique: ["Cormorant Garamond", "serif"],
        modern: ["Poppins", "sans-serif"],
        sport: ["Roboto Mono", "monospace"],
      },
      colors: {
        minimalBg: "#0f0f0f",
        classicBg: "#f5f0e1",
        antiqueBg: "#e0cda9",
        modernBg: "#1f2937",
        sportBg: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
