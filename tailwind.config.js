/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        "2lg": {
          min: "1024px",
          max: "1220px",
        },
        xl: "1360px",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
