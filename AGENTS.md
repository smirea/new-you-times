# Stack

- Tooling: Bun + TypeScript
- Server: Bun.serve API
- Client: Svelte + Vite
- UI: Tailwind CSS (enabled in client/src/index.css)
- Linting and Hooks: Oxlint + Oxfmt + Svelte Check + Lefthook

# Architecture

- Workspaces: root package manages `server` and `client`.
- Server entry: `server/src/index.ts`, served with `Bun.serve`.
- Client entry: `client/src/main.ts`, mounting `client/src/App.svelte`.
- Svelte config: `client/svelte.config.mjs`.
- Vite config: `client/vite.config.ts`, with Svelte and Tailwind plugins.
- Static client assets live in `client/public`.
- There is no client router yet; keep the starter bare until routing is needed.
- API requests from the client should use the client-relative `/api` path. Vite proxies `/api/*` to the Bun server and strips the `/api` prefix.

# Local Dev

- Use `https://new-you-times.localhost` via localias instead of `localhost:6060`.
- Default ports are `CLIENT_PORT=6060` and `API_PORT=6061`; the server still requires `API_PORT` in the environment.
- Use `env-manager` for project env vars when needed.
