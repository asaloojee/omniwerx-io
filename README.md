# omniwerx.io

Marketing site for OMNIWERX, built with SvelteKit and Vite Plus.

## Development

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm run ci
```

## Environment

Copy `.env.example` to `.env` and configure the Resend credentials used by the contact and survey forms:

```sh
cp .env.example .env
```

`RESEND_TO_EMAIL` is optional and defaults to `info@omniwerx.io`.

## Build

```sh
pnpm build
pnpm preview
```

## Deployment

The site uses the Cloudflare adapter and the environments defined in `wrangler.jsonc`.

```sh
pnpm deploy:preview
pnpm deploy
```
