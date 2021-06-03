const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#F1F5F9",
        accent: "#8B5CF6",
        secondary: "#94A3B8",
        tertiary: "#475569",
        background: "#18181B",
      },
      fontFamily: {
        sans: ["Roboto Mono", ...fontFamily.mono],
      },
    },
  },
  variants: {},
}
