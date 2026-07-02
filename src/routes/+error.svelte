<script lang="ts">
  import { page } from "$app/state";
  import SectionLabel from "$lib/components/SectionLabel.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";

  const isNotFound = $derived(page.status === 404);
</script>

<svelte:head>
  <title>{page.status} | omniwerx</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<SiteNav />

<main>
  <section class="error-page" aria-labelledby="error-heading">
    <div class="container container--narrow error-page__inner">
      <SectionLabel
        class="error-page__label"
        text={isNotFound ? "route not found" : "request failed"}
      />

      {#if isNotFound}
        <h1 class="error-page__heading" id="error-heading">
          The page you are looking for does not exist.
        </h1>
        <p class="error-page__message">
          The address may have moved, been retired, or never existed. Return to
          the main route and continue from there.
        </p>
      {:else}
        <h1 class="error-page__heading" id="error-heading">
          This request could not be completed.
        </h1>
        <p class="error-page__message">
          The system received an unexpected response. Return home and continue
          from a stable point.
        </p>
      {/if}

      <a class="button error-page__button" href="/">
        <span>Return home</span>
      </a>
      <p class="error-page__code" aria-hidden="true">{page.status}</p>
    </div>
  </section>
</main>

<SiteFooter />
