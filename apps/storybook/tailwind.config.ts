import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./.storybook/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/design-system/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--color-primary)" },
        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
        },
        foreground: {
          DEFAULT: "var(--color-foreground)",
          muted: "var(--color-foreground-muted)",
        },
        border: "var(--color-border)",
        muted: "var(--color-muted)",
      },
    },
  },
  plugins: [],
};

export default config;
