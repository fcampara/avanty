// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/pages/**",
    "!**/views/**",
    "!**/services/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
}

module.exports = createJestConfig(customJestConfig)
