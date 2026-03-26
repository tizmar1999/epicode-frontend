import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/design-system/src/**/*.{ts,tsx}",
    "../../packages/ui/src/components/button.tsx",
    "../../packages/ui/src/components/card.tsx",
    "../../packages/ui/src/components/input.tsx",
    "../../packages/ui/src/components/progress.tsx",
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
}

export default config
