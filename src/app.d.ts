// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
type RateLimitBinding = {
  limit(options: { key: string }): Promise<{ success: boolean }>;
};

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    interface Platform {
      env?: {
        CONTACT_FORM_RATE_LIMITER?: RateLimitBinding;
      };
    }
  }
}

export {};
