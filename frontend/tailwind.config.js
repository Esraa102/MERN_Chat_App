/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#2B222A",
        "bright-brown": "#C2927E",
      },
    },
  },
  plugins: [daisyui],
};
