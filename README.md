# EPICODE LMS (Web + Design System)

## Overview
Next.js LMS interface backed by a reusable design system inside a Turborepo. Includes dark/light themes, responsive navigation, keyboard-accessible tree, and chat UI.

## Setup
```bash
pnpm install
pnpm turbo run dev   # starts all dev targets (web + storybook if configured)
```

### Common scripts
- `pnpm build` — turborepo build (Next production build + packages)
- `pnpm test` — `turbo run test` (design-system Vitest etc.)
- `pnpm lint` — `turbo lint`
- `pnpm format` / `pnpm format:check` — Biome formatter on apps + design-system
- `pnpm --filter web dev` — run LMS only
- `pnpm --filter storybook storybook` — run Storybook
- `pnpm --filter @workspace/design-system test` — design-system tests only
- `pnpm --filter web test` — LMS tests only
- `pnpm --filter @workspace/design-system typecheck` — TS no-emit for DS
- `pnpm --filter web typecheck` — TS no-emit for LMS

## Architecture & Decisions
- **Monorepo (Turborepo):** isolates UI primitives (`packages/ui`), design-system components (`packages/design-system`), app (`apps/web`), and Storybook (`apps/storybook`).
- **Theming:** CSS variables in tokens; `next-themes` for light/dark with per-user persistence; components consume vars (no hard-coded colors).
- **Accessibility:** Sidebar tree uses `role="treeitem"` with arrow/Home/End navigation; focus rings; chat/cards honor prefers-reduced-motion where animations exist.
- **Responsiveness:** Sidebar auto-collapses on mobile; chat opens via floating button overlay; hero/media uses fluid aspect-ratio box.
- **i18n:** Minimal context provider (EN/IT) used by layout/top bar/chat; mock course data is locale keyed.
- **Tooling:** Biome for formatting, Vitest for tests, Husky + lint-staged to run format check + DS tests on commit (passes with no tests).

## Screenshots
Add latest UI captures to `docs/screenshots/` and reference them here, e.g.:
`![LMS UI](docs/screenshots/lms-home.png)`

## Notes
- Type stripping warnings from Next 16 are expected (experimental notice).
- Husky v9 hook uses `pnpm lint-staged`; no deprecated sourcing lines are required in v10.
