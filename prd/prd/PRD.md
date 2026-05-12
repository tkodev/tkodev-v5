# PRD — Personal Portfolio (tkodev-new)

Product requirements for the next-generation personal portfolio website.

---

## 1. Product overview

### 1.1 Purpose

A **polished personal portfolio** that serves as social proof for founders, CTOs,
designers, and professional peers. The site presents a cohesive vision of professional
identity and creative output. LinkedIn remains the primary channel for recruiters;
this site targets relationship-driven audiences who want to understand the full picture
of who the person is professionally and creatively.

### 1.2 Audience

- **Founders and CTOs** — evaluating technical leadership and product sensibility.
- **Designers and creative peers** — exploring shared taste and cross-disciplinary range.
- **Professional network contacts** — building context before or after meeting in person.

### 1.3 Tone and aesthetic

- **Confident and considered.** Copy is direct and factual. No aspirational marketing language.
- **Design-forward.** Visual polish and motion signal craft standards — the site is itself
  a portfolio artifact.
- **Dark-mode-forward.** Default aesthetic leans dark. Every page must look polished in
  both light and dark modes.

---

## 2. Information architecture

### 2.1 Route map

| Route                     | Page             | Nav label     | Notes                                  |
|---------------------------|------------------|---------------|----------------------------------------|
| `/`                       | Home             | —             | Intro + nav links to main sections     |
| `/career`                 | Career           | Career        | Job experience list                    |
| `/projects`               | Projects         | Projects      | Gallery of portfolio works             |
| `/projects/[projectId]`   | Project Detail   | —             | Individual project deep-dive           |
| `/experiments`            | Experiments      | Experiments   | Fun design-related creative work       |
| `/notes`                  | Notes            | Notes         | Writing (future use)                   |

### 2.2 Navigation

The global header contains the primary nav. Nav items link to:
`/career`, `/projects`, `/experiments`, `/notes`.

The `/` home page is not in the nav. The `/projects/[projectId]` detail page is
accessed only from `/projects`.

### 2.3 Layout shell

All pages share one persistent layout wrapper (header + page content + footer).
There are no shared sub-nav layouts. Each page is self-contained within the shell.

---

## 3. Data model

All site content is stored as typed constants — no external CMS or API unless
explicitly decided otherwise.

### 4.1 Projects

Each project has: a unique identifier, one or more roles (development, design),
gallery media, device-framed screenshots, a title, a short intro, a full markdown
description, a client reference, collaborator references, a date range, skill tags,
and an optional featured flag. Display order is controlled by an ordered ID list.

### 4.2 Clients

Each client has: an identifier, display name, external URL, and theme-aware logo
variants (neutral, light, dark).

### 4.3 Jobs

Each job has: an identifier, company name, job title, location, a date range
(open-ended if current), and skill tags. Listed newest-first on the career page.

### 4.4 Profiles

Each profile represents a collaborator: identifier, name, title, and social/contact
links (LinkedIn, GitHub, email, phone).

---

## 4. Page-level requirements index

- [Home](pages/home.md) — `/`
- [Career](pages/career.md) — `/career`
- [Projects](pages/projects.md) — `/projects`
- [Project Detail](pages/project.md) — `/projects/[projectId]`
- [Experiments](pages/experiments.md) — `/experiments`
- [Notes](pages/notes.md) — `/notes`

---

## 5. Non-functional requirements

- **Performance**: Fast LCP on desktop and mobile. Images use explicit dimensions.
  Videos autoplay muted for ambient frame previews.
- **Accessibility**: Semantic HTML, keyboard navigation, and appropriate alt text on
  all media. WCAG 2.0 AA baseline.
- **SEO**: Full metadata (title, description, Open Graph, Twitter card) at root layout
  level. Per-page metadata overrides where relevant.
- **Theming**: All pages must render correctly in light, dark, and system modes.
