/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")(["ui", "icons"])

module.exports = withTM({
  reactStrictMode: true,
})

