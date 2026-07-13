# Covenant Foundry

Covenant Foundry's public website, project directory, and project-specific dev logs.

## Stack

- Astro 7
- Static output
- Markdown content collections with YAML front matter
- CSS and inline SVG for the visual system

## Commands

```sh
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop
npm run check
npm run build
npm run validate
npm run preview
```

`npm run validate` runs the Astro content and type checks followed by a production build. Run it
before releasing changes.

## Content

Projects and dev logs are Astro build-time content collections backed by Markdown files with YAML
front matter. The schemas live in `src/content.config.ts`.

### Add a project

Create `src/content/projects/<project-id>.md`:

```md
---
name: Project name
description: A short summary used on project cards and in metadata.
website: https://example.com/
repository: https://github.com/example/project
status:
  label: Pilot
  tone: pilot
support:
  label: Open source
sortOrder: 3
featured: true
draft: false
---

## Project overview

Long-form project copy goes here.
```

Valid status tones are `live`, `pilot`, `planned`, and `paused`. `website`, `repository`, and
`support.href` are optional. A project with `featured: false` still gets a project page but is not
shown in the homepage dossier grid.

### Add a dev log entry

Create `src/content/devlogs/<project-id>/<entry-id>.md`:

```md
---
title: Entry title
summary: A short summary used in dev-log lists and page metadata.
project: project-id
publishedAt: 2026-07-12
sourceUrl: https://github.com/example/project/commit/abc123
draft: false
---

The entry body goes here.
```

The `project` value must match a project Markdown filename. Entries are sorted newest first by
`publishedAt`. Draft projects and entries appear in local development and are excluded from
production builds. Store each entry under the directory matching its `project` value. `updatedAt`
and `sourceUrl` are optional and appear in the published article metadata when present.

Generated routes:

- `/projects`
- `/projects/<project-id>`
- `/projects/<project-id>/devlog/<entry-id>`

The production build also generates `sitemap-index.xml`. `public/robots.txt` advertises the sitemap
at `https://covenantfoundry.com/sitemap-index.xml`.
