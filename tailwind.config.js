module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    body: ["Andada Pro", "serif"],
    sans: ["ui-sans-serif", "system-ui"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};