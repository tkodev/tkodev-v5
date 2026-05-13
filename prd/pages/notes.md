# Page spec — Notes (`/notes`)

## Purpose

A writing section for future use. Reserved for long-form articles, opinions, or
reflections. Currently a placeholder; implementation is deferred.

## Primary audience

Professional peers and anyone interested in the author's thinking beyond the work itself.

## Key messages

- Thinking in public: perspectives on engineering, design, and craft.

## Content sections

### Notes list (`SectionNotes`)

A chronological list of published notes. Each entry shows:

- Title
- Date published
- Short excerpt or tagline
- Link to the full note (route TBD — could be `/notes/[slug]`)

## Functional requirements

- If no notes are published, render an empty state message rather than a blank page.
- All content sourced from constants or a CMS integration (to be decided when implemented).

## Acceptance criteria

- [ ] Empty state renders gracefully when no notes are published.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.

## Status

**Deferred.** Page and route should be scaffolded but content and full implementation
are future work. Nav link may be shown with a "coming soon" state or hidden until
content exists.
