/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ppurple: "#D434FE",
        pblack: "#150E28",
        pblue: "#903AFF",
      },
    },
  },
  plugins: [],
};
