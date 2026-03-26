# EPICODE LMS Design System

## Overview

This project is a small Learning Management System (LMS) interface built using a design system approach inside a monorepo.

It demonstrates component abstraction, reusability, and scalable frontend architecture.

---

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Storybook
- Vitest + React Testing Library
- Turborepo
- TypeScript

---

## Architecture

The project follows a layered architecture:

- `packages/ui`: low-level UI primitives
- `packages/design-system`: reusable and styled components (DsButton, DsSidebar, etc.)
- `apps/web`: application layer consuming the design system
- `apps/storybook`: component documentation and preview

---

## Features

- Reusable design system components
- Hierarchical sidebar with nested navigation
- Chat interface components
- Storybook documentation with autodocs
- Component testing with Vitest

---

## Installation

```bash
pnpm install
```

---

## Run the Web App

```bash
pnpm --filter web dev
```

---

## Run Storybook

```bash
pnpm --filter storybook storybook
```

---

## Run Tests

```bash
pnpm turbo run test
```

---

## Run Lint

```bash
pnpm turbo run lint
```

---

## Notes

- The design system abstracts UI primitives to ensure consistency and reusability.
- Storybook is used as a documentation tool for components.
- Testing focuses on component behavior and interaction.

---
