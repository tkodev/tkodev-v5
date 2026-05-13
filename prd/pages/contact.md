# Page spec — Contact (`/contact`)

## Purpose

Dedicated contact page consolidating all outreach and social links.

## Primary audience

Anyone wanting to reach out — founders, CTOs, collaborators, or professional contacts.

## Key messages

- Direct, no-friction access to every outreach channel.

## Content sections

### Contact links (`SectionContact`)

Sourced from `profileEntries.tony` in `constants/profile.ts`. Renders:

- LinkedIn profile link
- GitHub profile link
- Email link (`mailto:`)
- Phone link (`tel:`)
- Resume PDF download (`/files/tony-ko-resume-2026.pdf`)

## CTAs

- All links open in a new tab (except `mailto:` and `tel:`).

## Functional requirements

- All contact data sourced from `constants/profile.ts` — no hardcoded copy in the component.

## Acceptance criteria

- [ ] All five contact links render and resolve correctly.
- [ ] Resume link downloads the correct PDF.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
