// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slide: {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%":      { transform: "translateX(10px)"  },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        slide:   "slide 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};