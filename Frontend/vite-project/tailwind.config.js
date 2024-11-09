/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b8ff4",
        secondary: "#EF86e3",
      },
      theme: {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
