/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#212121",
        gray: "#e5e5e5",
        white: "#faf3f3",
      },
    },
  },
  plugins: [],
};
