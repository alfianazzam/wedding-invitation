/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1028px", // Menambahkan breakpoint lg jika belum ada
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio", require("daisyui"))],
};
