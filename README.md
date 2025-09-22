## Bolibrate Frontend

A modern frontend built with Next.js 15 (App Router) and React 19, styled with Tailwind CSS v4 and SCSS, featuring type-safe forms with React Hook Form + Zod and global state via Redux Toolkit.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI & Styling**: Tailwind CSS v4, SCSS, Lucide Icons
- **Components**: Utility-first components using `class-variance-authority` and Radix Slot
- **State Management**: Redux Toolkit + React Redux
- **Forms & Validation**: React Hook Form, Zod, `@hookform/resolvers`

### Features

- **Fast Dev** with Turbopack (`next dev --turbopack`)
- **Typed Forms** with schema validation
- **Composable UI** primitives in `src/components/ui`
- **Utility helpers** in `src/lib/utils.ts`

---

## Project Structure

```
src/
  app/                # App Router entrypoints, layouts, pages
    layout.tsx        # Root layout
    page.tsx          # Home page
  components/
    ui/               # Reusable UI components (e.g., button)
  lib/
    utils.ts          # Shared utilities
  styles/
    globals.scss      # Global styles
```

---

## Getting Started

### Prerequisites

- Node.js 20+ (recommended 22+)
- Package manager: Bun (preferred) or npm/yarn/pnpm

### Install Dependencies

```bash
# using Bun (preferred)
bun install

# or with npm
npm install
```

### Development

```bash
# start dev server (Turbopack)
bun run dev
```

Open `http://localhost:3000` in your browser.

### Build

```bash
bun run build
```

### Start (Production)

```bash
bun run start
```

### Lint

```bash
bun run lint
```

---

## Styling

- **Tailwind CSS v4** is configured in `tailwind.config.ts`.
- Global styles live in `src/styles/globals.scss`.
- Prefer utility classes; use `class-variance-authority` for component variants.

## Forms & Validation

- Use `react-hook-form` for form state.
- Define schemas with `zod` and integrate via `@hookform/resolvers` for type-safe validation.

## State Management

- Use **Redux Toolkit** for global state, with **React Redux** hooks.

---

## Scripts (from package.json)

- **dev**: `next dev --turbopack`
- **build**: `next build`
- **start**: `next start`
- **lint**: `next lint`

---

## Deployment

Optimized for deployment on Vercel. After building, run `next start` or connect the repo to Vercel and set the framework to Next.js.

---

## Contributing

1. Create a feature branch.
2. Commit with clear messages.
3. Open a PR describing changes and testing steps.

---

## License

This project is proprietary unless a LICENSE file states otherwise.
# bolibrate-frontend-next
