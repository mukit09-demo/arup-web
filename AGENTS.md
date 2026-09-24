<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# arup-web conventions

See `README.md` for the architecture overview. When changing this codebase:

- **The UI never fetches directly.** All content comes from `content` in
  `src/lib/content` (the `ContentRepository` interface). Add a method to the
  interface and to *both* `mock.repository.ts` and `http.repository.ts` — never
  call `fetch` or import `src/data` from a component or page.
- **New entity to display? Write a mapper, not a card.** Map it to `CardItem` in
  `src/lib/content/mappers.ts` and render it with `CardGrid` / `FilterableGrid`.
- **Pages compose sections.** Files under `src/app` bind params, load content and
  arrange `<Section>` bands. No spacing utilities, no business logic, no `fetch`.
- **Components live in one of three folders**: `ui/` primitives (no domain
  knowledge), `sections/` page bands (take domain types), `layout/` chrome.
- **`process.env` is read only in `src/lib/config/env.ts`.** Add new variables
  there and to `.env.example`.
- **Routes come from `src/lib/config/routes.ts`**, navigation from
  `src/lib/config/site.ts`. Never hard-code a path in a component.
- **Design tokens live in the `@theme` block of `src/app/globals.css`** — this is
  Tailwind v4, so there is no `tailwind.config.js`. Use the token scales
  (`ink-*`, `brand-*`, `font-display`) rather than raw hex values.
- **Keep the dependency list short.** Prefer a small local helper in
  `src/lib/utils` over a new npm package.
- Verify with `npx tsc --noEmit`, `npm run lint` and `npm run build`.
