# tkodev-new

Next-generation personal portfolio website.

## What this repo is

A Next.js (App Router) personal portfolio website.

## Tech stack

| Tool / Library  | Version / Notes                      |
|-----------------|--------------------------------------|
| Node            | 24                                   |
| pnpm            | 11                                   |
| Next.js         | 16, App Router                       |
| Tailwind CSS    | 4                                    |
| shadcn/ui       | Component library                    |
| Radix UI        | Primitive components                 |
| CVA + twMerge   | Variant management and class merging |
| lucide-react    | Icons                                |
| Framer Motion   | Animations and parallax              |
| ESLint          | Linting                              |

## Dev commands

```sh
pnpm install        # Install dependencies
pnpm dev            # Start development server
pnpm build          # Production build
pnpm start          # Start production server
pnpm lint:check     # Lint
pnpm lint:fix       # Lint and auto-fix
pnpm type:check     # TypeScript type checking
```

## Directory structure

```text
.
├── app/               # Next.js App Router pages
│   ├── layout.tsx     # Root layout (providers, fonts, metadata)
│   ├── page.tsx       # / — home
│   ├── career/        # /career
│   ├── projects/      # /projects and /projects/[projectId]
│   ├── experiments/   # /experiments
│   ├── notes/         # /notes
│   └── contact/       # /contact
├── components/
│   ├── atoms/         # Primitive UI elements
│   ├── molecules/     # Compound components
│   ├── organisms/     # Page-section compositions
│   └── templates/     # Layout shells (header, footer, main, section, overlay)
├── constants/         # Static data (clients, jobs, projects, profiles, media, theme, date)
├── designs/           # Design assets (branding, signature)
├── fonts/             # next/font loader modules
├── hooks/             # React hooks
├── providers/         # Context providers
├── prd/
│   ├── PRD.md         # Product requirements
│   └── pages/         # One spec per route
├── public/            # Static assets (audio, favicons, files, fonts, images, videos)
├── themes/            # CSS token files
├── types/             # TypeScript types for domain models
└── utils/             # Utility functions
```

## Documentation

- **Product requirements and page specs:** [`prd/PRD.md`](./prd/PRD.md)
- **AI and working conventions:** [`CLAUDE.md`](./CLAUDE.md)
- **Git and contribution rules:** [`CONTRIBUTING.md`](./CONTRIBUTING.md)
