const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static"),
        "@atoms": path.resolve(__dirname, "src/components/Atoms"),
        "@types": path.resolve(__dirname, "src/types"),
        "@molecules": path.resolve(__dirname, "src/components/Molecules"),
      },
    },
  })
}
