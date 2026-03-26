import { nextJsConfig } from "@workspace/eslint-config/next-js";

// nextJsConfig is a flat config array; append our ignores as a final entry
const config = [
  ...nextJsConfig,
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "build",
      "coverage",
      "*.config.js",
      "*.config.ts",
    ],
  },
];

export default config;
