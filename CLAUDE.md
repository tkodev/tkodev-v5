# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

A Next.js (App Router) personal portfolio website — a new generation of the site.

## Tech stack

- **Next.js 16** App Router — `app/` directory, `layout.tsx` / `page.tsx` conventions.
- **Tailwind CSS 4** — utility-first; all styles via semantic tokens, never raw hex.
- **shadcn/ui + Radix UI** — prefer shadcn components; use Radix primitives directly
  when shadcn doesn't cover the use case. Do not build primitives already covered.
- **CVA + twMerge** — all variant management via `cva()`; merge classes with `cn()`.
- **Framer Motion** — component-level animations and parallax; define tokens in
  `themes/theme.ts`, don't inline keyframes in components.
- **ESLint** — linting. Do not configure Biome or Prettier.
- **lucide-react** — sole icon library. Do not add other icon sets.

## Dev commands

```sh
pnpm dev            # Start development server
pnpm build          # Production build
pnpm lint:check     # Lint all files
pnpm lint:fix       # Lint and auto-fix
pnpm type:check     # TypeScript type checking
```

## Repository layout

```text
.
├── CLAUDE.md
├── prd/
│   ├── PRD.md             # Product requirements
│   └── pages/             # One spec per route (flat); see PRD.md §2 for route map
│       ├── home.md
│       ├── career.md
│       ├── projects.md
│       ├── project.md
│       ├── experiments.md
│       └── notes.md
├── app/                   # Next.js App Router pages
├── components/            # atoms → molecules → organisms → templates
├── constants/             # Static data (clients, jobs, projects, profiles, media, theme, date)
├── designs/               # Design assets (branding, signature)
├── fonts/                 # next/font loader modules
├── hooks/                 # React hooks
├── providers/             # Context providers
├── public/                # Static assets (audio, favicons, files, fonts, images, videos)
├── themes/                # CSS token files
├── types/                 # TypeScript types for domain models
└── utils/                 # Utility functions
```

## Documentation

- **Product requirements and page specs:** [`prd/PRD.md`](./prd/PRD.md)
- **Setup, scripts, full directory tree:** [`README.md`](./README.md)
- **Git and contribution rules:** @CONTRIBUTING.md

## Working conventions

### Data management

All site content is stored as typed constants in `constants/`:

- `client.ts` — `clientEntries` and `clientIds`: companies/clients worked with.
- `job.ts` — `jobEntries`: chronological employment history with skills.
- `project.ts` — `projectEntries` and `projectIds`: portfolio projects with media, frames,
  team members, skills, and featured flag.
- `profile.ts` — `profileEntries`: collaborators referenced in projects.
- `media.ts` — shared media entries.
- `theme.ts` — Tailwind theme constants (screens, colors, typography, utilities, animations).
- `date.ts` — timezone constants (`appTimeZone`).

When adding or updating content, edit the relevant constant file. Do **not** create
additional data sources or fetch from external APIs unless explicitly asked.

Dates are always stored via `fromZonedTime(isoString, appTimeZone)` from `date-fns-tz`.
Never use `new Date()` directly for project/job dates.

### Component conventions

Components follow an **Atomic Design hierarchy**:

- `atoms/` — The smallest, indivisible building blocks that can't be broken down further without losing functionality. (Button, Icon, Logo, Frame, Media, Video, Hypertext, etc.).
- `molecules/` — Groups of atoms bonded together to form a small, functional unit with a singular purpose. (Nav, Filter, Table).
- `organisms/` — Complex, self-contained UI components composed of molecules and/or atoms. Represent a distinct piece of content or interactivity. (CardHome, Dialog, etc.).
- `templates/` — Page-level layout shells: structural wrappers that frame the page but carry no content of their own. (Header, Footer, Main, Section, Overlay, Underlay). These are consumed directly by `app/` layouts and pages.
- `app/` — Next.js pages and layouts. Compose from `templates/` for structure and `organisms/` for content.

All new components must follow the structure in `components/atoms/example.tsx`

Rules:

- Use CVA (`class-variance-authority`) for all visual variant management — never ad-hoc
  `className` overrides at the call site.
- Use `cn()` + `cva()` (clsx + tailwind-merge) for all className composition.
- Expose `asChild` via Radix `Slot` when a component needs to delegate rendering to its
  child (e.g. `<Button asChild><Link …>`).
- Keep layout utilities (`w-full`, `mt-4`, etc.) at the call site via `className`;
  keep visual styles inside the CVA definition.
- New layout shells go in `templates/`; content-bearing compositions go in `organisms/`; primitives go in `atoms/`.

### Theming

- `next-themes` handles light/dark/system detection. `ThemeProvider` is in
  `providers/theme.tsx`. Always set `defaultTheme="system"` and `enableSystem`.
- Add `suppressHydrationWarning` to `<html>` and `<body>` to avoid hydration mismatches.
- Theme-aware components must `useEffect` + `useState(mounted)` and return a placeholder
  until mounted — otherwise icons and states will SSR incorrectly.
- The Tailwind theme config is exported from `themes/theme.ts`.

### Semantic colour tokens

- Never use raw hex values or non-semantic Tailwind color utilities in components.
  Use semantic tokens: `text-foreground`, `bg-background`, `bg-primary`,
  `text-primary-foreground`, `text-muted-foreground`, `bg-card`, `bg-accent`, etc.
- Pair every background token with its matching foreground:
  `bg-primary → text-primary-foreground`, `bg-card → text-card-foreground`.
- Dark-mode overrides are handled via CSS custom properties — components do not need
  per-component dark overrides if semantic tokens are used correctly.

### Fonts

Two fonts are loaded via `next/font/local` and applied on `<body>`:

- **Alliance No.2** (`--font-alliance-no2`) — display headings and branded text.
- **Geist Sans** (`--font-geist-sans`) — body text (default).

Additional font modules exist (`alliance-no1`, `carbon`, `industry`, `inter`) but may
not be active. Only activate via the root layout font variable if required.

### Page transitions and motion

- Framer Motion (`motion`) is used for component-level animations and parallax.
- Use animation tokens defined in `themes/theme.ts` before defining new ones.

### Adding a new page

1. Create `app/<path>/page.tsx` following existing page structure.
2. Create `prd/pages/<path>.md` following the existing section structure.
3. Add the route to the Route map table in `prd/PRD.md` §2.
4. Update the header nav in `components/templates/header.tsx` if the page should
   appear in global navigation.

### Removing or renaming a page

- Remove the `app/` directory, the `prd/pages/` file, and any nav references.
- Use Grep to find all references to the route before deleting.

## Things to avoid

- Don't let the implementation drift from the PRD. When behaviour or IA changes, update
  both the relevant `prd/pages/*.md` spec and the matching `app/` code in the same change.
- Don't use raw `new Date()` for project/job dates — always use `fromZonedTime` with
  `appTimeZone`.
- Don't add data to component files. All content lives in `constants/`.
- Don't use non-semantic colour values in JSX (`text-teal-500`, raw hex `#fff`). Use
  semantic tokens only.

## Git

- Do not sign commits or PRs as Claude.
- Do not include `claude.ai/code` session links, `Co-Authored-By: Claude` trailers, or
  any other "Generated with Claude Code" markers in commit messages or PR bodies.
- Never push directly to `main`. Always work on a feature branch.
- Do not open a pull request unless explicitly asked.

## Notes

This is a living document. Key learnings that durably improve how work gets done here
should be added — but only when they genuinely belong as a best practice. Don't append
notes or observations better captured in a commit message, the PRD, or a page spec.
Preserve the intent and structure of the document; if something doesn't fit cleanly,
it probably doesn't belong here.
