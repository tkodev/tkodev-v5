# Page spec — Experiments (`/experiments`)

## Purpose

A showcase of fun, design-related creative work that sits outside of client projects.
Communicates aesthetic range, creative curiosity, and design sensibility beyond
production deliverables.

## Primary audience

Designers, creative peers, and founders who care about taste and creative perspective
as much as technical output.

## Key messages

- A creative practice that extends beyond professional deliverables.
- Exploration of visual design, interaction, and conceptual ideas.
- Signals design sensibility and curiosity.

## Content sections

### Experiments gallery (`SectionExperiments`)

A grid or masonry layout of experiment entries. Each entry shows:

- Title
- Short description or tagline
- Primary media (image or video)
- Optional tags (medium, discipline, etc.)

Sourced from `constants/` — a dedicated `experiment.ts` constant file (to be defined).

## CTAs

- Experiment entry click → full-size media view or detail panel (to be designed).

## Functional requirements

- All data sourced from constants — no hardcoded copy in components.
- Media supports both images and videos.
- No pagination required initially; all experiments render in a single scrollable view.

## Acceptance criteria

- [ ] All experiment entries render from constants.
- [ ] Media displays correctly (image and video types).
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
