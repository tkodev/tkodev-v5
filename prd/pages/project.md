# Page spec — Project Detail (`/projects/[projectId]`)

## Purpose

Deep-dive view for a single portfolio project. Shows framed screenshots, gallery
media, full description, team members, skills, and client context.

## Primary audience

Founders, CTOs, and creative peers who clicked through from the Projects gallery
to evaluate a specific project in detail.

## Key messages

- Concrete outcomes, specific technologies, and real team context — not generic claims.
- Framed screenshots and gallery media demonstrate visual quality of the work.
- Collaborators are credited and linked.

## Content sections

### Project header

- Title
- Client name + link (from `clientEntries[project.clientId]`)
- Date range: `startDate` → `endDate` (or "Present" if ongoing)
- Role tags: `development`, `design`
- Skills tag cloud

### Frames

Device-framed media (`project.frames`). Each frame entry has:
- `frameId`: `'desktop'` or `'mobile'` — determines device frame rendered
- `type`: `'image'` or `'video'`
- `src`, `width`, `height`, `alt`

Desktop frames show at full width. Mobile frames show in a phone chrome.

### Gallery

All `project.media` entries in a scrollable gallery. Opens a lightbox dialog on click
for full-size viewing.

### Full description

Rendered via a Markdown component. Supports bold, headings, and paragraph formatting
from the `project.desc` field.

### Team

All `project.profileIds` rendered as collaborator credits. Each shows:
- Name, title, LinkedIn link.

### Back navigation

Link back to `/projects`.

## CTAs

- Client name → external client/company URL (new tab)
- Collaborator LinkedIn links → external (new tab)
- Back to Projects → `/projects`

## Functional requirements

- `projectId` is the camelCase project ID (e.g., `loblawsPerfectExperience`).
- The page reads from `projectEntries[projectId]` in `constants/project.ts`.
- If `projectId` does not match a known ID, render a 404.
- Lightbox dialog must be keyboard-accessible and closable via Escape.
- Videos in frames autoplay muted and loop for ambient preview.
- The `desc` field may contain markdown — always render via the Markdown component.

## Acceptance criteria

- [ ] All `projectIds` resolve to a valid detail page (no broken routes).
- [ ] Frames render with correct device chrome (desktop / mobile) per `frameId`.
- [ ] Gallery media opens in a lightbox on click.
- [ ] Lightbox is keyboard-accessible and closable via Escape.
- [ ] Markdown in `desc` renders correctly (bold, paragraphs, headings).
- [ ] Team section shows all collaborators from `profileIds` with LinkedIn links.
- [ ] Client link opens in a new tab.
- [ ] Unknown `projectId` renders a 404.
- [ ] Page renders correctly in light and dark modes.
- [ ] Page is responsive across xs–4xl breakpoints.
