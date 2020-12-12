module.exports = {
  purge: {
    mode: "layers",
    layers: ["components", "utilities"],
    content: ["./src/**/*.js"]
  },
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  variants: {},
  plugins: [],
}
