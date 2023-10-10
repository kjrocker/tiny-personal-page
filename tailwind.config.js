const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./posts/**/*.{html, markdown}",
    "./templates/**/*.{html, markdown}",
    "*.{html, markdown}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        heading: "var(--color-heading)",
        body: "var(--color-body)",
      },
    },
  },
  variants: {},
  plugins: [],
};
