/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "986px",
      xl: "1440px",
    },
    extend: {
      colors: {
        biru: "#4361EE",
        abuabu: "#9B9EAC",
        putih: "#FFFFFF",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
