# Page spec — Projects (`/projects`)

## Purpose

A filterable gallery of portfolio projects. Visitors can browse all work or filter
by role. Each project card links to its detail page.

## Primary audience

Founders, CTOs, and creative peers evaluating project breadth, technical range, and
design sensibility.

## Key messages

- A wide range of shipped work spanning development and design disciplines.
- Featured projects represent highest-impact or most technically complex work.
- The gallery is browsable without leaving the page.

## Content sections

### Filter bar

- Filter by role: `all`, `development`, `design`.
- Filter by featured: `all`, `featured`.
- Filters applied client-side; no route change.

### Project grid (`SectionProjects`)

Sourced from `constants/project.ts`, ordered by `projectIds`. Each card shows:

- Project title
- Client name (from `clientEntries[project.clientId]`)
- Intro excerpt
- Primary media thumbnail (first `media` entry, if any)
- Role tags
- Start / end date range
- Featured badge if `isFeatured: true`

Each card links to `/projects/[projectId]`.

## CTAs

- Project card click → `/projects/[projectId]`

## Functional requirements

- Projects are filtered client-side.
- The full `projectIds` order from `constants/project.ts` defines display order within
  each filter result.
- Empty filter states must be handled gracefully.
- No pagination; all projects render in a single scrollable view.

## Acceptance criteria

- [ ] All projects from `projectIds` render when filter is `all`.
- [ ] Role filter (`development` / `design`) correctly shows only matching projects.
- [ ] Featured filter correctly shows only projects with `isFeatured: true`.
- [ ] Each card links to the correct `/projects/[projectId]` detail page.
- [ ] Empty filter state is handled gracefully.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
