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

### Contacts section

- All outreach and social links surfaced inline (no separate contact page needed).
- Email, LinkedIn, GitHub, and any other relevant links.

## CTAs

- Career → `/career`
- Projects → `/projects`
- Experiments → `/experiments`
- Contact links (email, LinkedIn, GitHub)

## Functional requirements

- No data fetching; all content is static.
- The contacts section replaces the need for a dedicated `/contact` route.
- Framer Motion may be used for entrance animations; keep them purposeful and fast.

## Acceptance criteria

- [ ] All four content sections render correctly.
- [ ] All nav link sections route to the correct pages.
- [ ] Contact links are correct and open email/external links appropriately.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
