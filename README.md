# omniwerx.io

Marketing site for OMNIWERX, built with SvelteKit and Vite Plus.

## Development

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm check
pnpm exec vp lint
pnpm exec vp fmt --check .
```

## Build

```sh
pnpm build
pnpm preview
```

## Production setup

Before launch, finish the remaining integration work:

- update the book-call URL
- wire the contact form with Resend
- switch from `adapter-auto` to the Cloudflare adapter
- complete mobile styles
