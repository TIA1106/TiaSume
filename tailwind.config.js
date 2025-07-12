/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Replace Tailwind colors with HEX values to avoid `oklch`
        amber: {
          700: "#b45309",
          800: "#92400e",
        },
        green: {
          700: "#15803d",
          800: "#166534",
        },
        red: {
          600: "#dc2626",
          700: "#b91c1c",
        },
        violet: {
          900: "#4c1d95",
        },
        gray: {
          500: "#6b7280",
          600: "#4b5563",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
