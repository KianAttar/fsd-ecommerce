# Beyond the Demo: What a Real Project Would Also Have

This demo focuses on Feature-Sliced Design structure. A production
ecommerce app would additionally need the following, none of which are
implemented here yet.

- **Unit tests** — tests for a single function/component in isolation, no real dependencies.
- **Integration tests** — tests that check multiple units working together correctly (e.g. a form + its validation + its submit handler).
- **E2E tests** — tests that drive the actual running app through a real browser like a user would, hitting real (or realistically mocked) network calls.
- **Global error boundary (+ local error boundaries)** — a component that catches JS errors in its child tree and shows a fallback UI instead of a blank crashed page; "local" ones scope the blast radius to one widget/section instead of the whole app.
- **TanStack Query (or similar data-fetching/caching layer)** — a library that manages server-state: fetching, caching, re-fetching, loading/error states, so you don't hand-roll `useEffect` + `useState` for every API call.
- **Global store (Zustand/Redux)** — a single place holding app-wide client state (not server data) that many unrelated components need to read/write, like our cart.
- **Analytics** — tracking business/product events users trigger ("added to cart", "signed up") so the company can see how the product is actually used.
- **Error monitoring (Sentry etc.)** — a service that automatically captures crashes/exceptions happening in real users' browsers and reports them to developers, since you can't see their console.
- **Performance monitoring / Web Vitals** — measuring how fast the app actually feels to real users (load time, responsiveness, visual stability), not just in your local dev environment.
- **Authentication** — logging in, storing/refreshing tokens, and restricting certain pages/routes to only logged-in (or authorized) users.
- **Code-splitting / lazy-loaded routes** — only downloading the JS for a page when the user actually navigates to it, instead of shipping the entire app's code upfront.
- **i18n (internationalization)** — supporting multiple languages by swapping out text strings based on the user's locale, instead of hardcoding English everywhere.
- **Feature flags** — a config switch (often controlled remotely, without a code deploy) that turns a feature on/off for some or all users — used for gradual rollouts, A/B tests, or quickly disabling something broken in production.
- **Real-time (WebSockets/SSE)** — a persistent connection that lets the server push updates to the browser instantly (e.g. live order status, chat), instead of the browser having to repeatedly ask "anything new?".
- **Offline support / PWA / service worker** — a background script that lets the app cache assets/data and keep working (partially) without an internet connection, and lets it be "installed" like a native app.
- **SEO / meta tags** — setting page title, description, and social-preview tags per page so search engines and link previews (Slack, Twitter) show the right info.
- **Design system documentation (Storybook)** — a standalone tool that renders your UI components in isolation with different props/states, so designers/devs can browse and test them without running the whole app.
- **Form handling & validation** — libraries/patterns (react-hook-form, Zod) for managing form input state, validation rules, and error messages consistently instead of by hand per form.
- **Environment configuration (.env, per-environment config)** — different settings (API URLs, keys) depending on whether you're running locally, in staging, or in production, without hardcoding values.
- **Accessibility tooling** — linters/testing tools (eslint-plugin-jsx-a11y, axe) that catch issues making the app unusable for people relying on screen readers, keyboards, etc.
- **Linting / formatting** — automated tools (ESLint, Prettier) that enforce consistent code style and catch common mistakes before they're even reviewed.
- **CI/CD pipeline** — automated scripts that run tests/builds on every code change and (optionally) deploy the app automatically when checks pass.
