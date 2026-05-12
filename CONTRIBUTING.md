# Contributing

## Git workflow

- Work on the branch specified for the task.
- Create new commits rather than amending.
- Never force-push or skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.
- Base new PRs on the latest main branch.

## Conventional commits

All commit subjects must follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<optional scope>): <imperative summary>
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Scopes:** match the affected area — `home`, `career`, `projects`, `experiments`, `notes`, `prd`, `constants`, `theme`, etc. Omit when global.

- Subject: ≤72 characters, lowercase, no trailing period.
- Body: explain the *why* when the diff alone doesn't.
- Breaking changes: use `!` suffix and a `BREAKING CHANGE:` footer for route moves, renames, or behavior changes.

## Branch naming

```text
<type>/<short-kebab-summary>
```

Examples: `feat/projects-filter`, `fix/career-dates`, `docs/prd-experiments`

- ≤40 characters, lowercase, hyphen-separated.
- Reference the affected area, not a ticket number.
