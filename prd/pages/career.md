# Page spec — Career (`/career`)

## Purpose

Presents the full employment history in reverse-chronological order. Primary
destination for founders, CTOs, and peers evaluating professional track record and
technical leadership experience.

## Primary audience

Founders, CTOs, and professional contacts evaluating depth of experience and career
progression.

## Key messages

- Long track record across engineering, design, and leadership roles.
- Breadth of industries, clients, and technology stacks.
- Progression from individual contributor to staff-level leadership.

## Content sections

### Employment history (`SectionJobs`)

Sourced from `constants/job.ts`. Displayed in reverse-chronological order (newest first).

Each entry shows:

- Company name
- Job title
- Location
- Date range (start → end, or "Present" if ongoing)
- Skill tags

## CTAs

- No primary CTA. The page is informational.
- Optional: link to resume download if surfaced from constants.

## Functional requirements

- All data sourced from `constants/job.ts` — no hardcoded copy in the component.
- Dates rendered via `date-fns` relative formatting where appropriate.
- Employment dates use `fromZonedTime` from `constants/date.ts`.

## Acceptance criteria

- [ ] All job entries render from `jobEntries` in reverse-chronological order.
- [ ] Date ranges display correctly, showing "Present" for ongoing roles.
- [ ] Skill tags render for each entry.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
