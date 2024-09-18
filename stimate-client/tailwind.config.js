/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27005D",
        secondary: "#9400FF",
        sky_blue: "#AED2FF",
        sky_blue_100: "#E4F1FF",
        dark_space: "#010b19",
      },
    },
  },
  plugins: [],
};
