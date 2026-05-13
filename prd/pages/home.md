# Page spec — Home (`/`)

## Purpose

The entry point and front door of the portfolio. Establishes tone, communicates
professional identity at a glance, and provides clear navigational paths to each
major section of the site. Not in the global nav.

## Primary audience

Anyone arriving at the site for the first time — founders, CTOs, designers, or
professional contacts.

## Key messages

- Clear professional positioning at a glance.
- Direct paths to the content areas visitors care about most.

## Content sections

### Intro section

- Brief statement of professional identity and creative perspective.
- Establishes the tone and aesthetic of the site.

### Career link section

- Teaser and link to `/career`.
- Communicates the depth and range of job experience.

### Works link section

- Teaser and link to `/projects`.
- Communicates the breadth of shipped work.

### Experiments link section

- Teaser and link to `/experiments`.
- Communicates the creative and design-forward side of the work.

### Contact link section

- Teaser and link to `/contact`.
- Outreach and social links.

## CTAs

- About → `/career`
- Projects → `/projects`
- Experiments → `/experiments`
- Contact → `/contact`

## Functional requirements

- No data fetching; all content is static.
- Framer Motion may be used for entrance animations; keep them purposeful and fast.

## Acceptance criteria

- [ ] All content sections render correctly.
- [ ] All link sections route to the correct pages (`/career`, `/projects`, `/experiments`, `/contact`).
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
