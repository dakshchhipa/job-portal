/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
    "./pages/**/*.{html,js}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        blue: "#3575E2",
      },
    },
  },
  plugins: [],
};
