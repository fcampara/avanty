/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")(["ui", "icons"])
const withPlugins = require("next-compose-plugins")

const plugins = [
  [
    withTM,
    {
      reactStrictMode: true,
    },
  ],
]

const nextConfig = {
  images: {
    domains: ["imglite.avantstay.com"],
  },
}

module.exports = withPlugins(plugins, nextConfig)

