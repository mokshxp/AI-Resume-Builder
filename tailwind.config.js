/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        button: {
          DEFAULT: "#4f46e5",       // main button color
          hover: "#3730a3",         // hover color
          text: "#ffffff",          // text color
        },
      },
      borderRadius: {
        md: "0.375rem", // optional: for buttons
        lg: "0.5rem"
      },
    },
  },
  plugins: [],
};

