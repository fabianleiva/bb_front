/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        "buddies-blue": {
          50: "#f0f6fe",
          100: "#ddeafc",
          200: "#c2dbfb",
          300: "#99c5f7",
          400: "#68a5f2",
          500: "#4583ec",
          600: "#3066e0",
          700: "#2752ce",
          800: "#2643a7",
          900: "#243d84",
          950: "#1a2751",
        },
        "buddies-bg": "#fafafa",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
