<script lang="ts">
  import { onMount } from "svelte";
  import BadgeHero from "$lib/components/BadgeHero.svelte";

  let nav: HTMLElement | undefined;

  onMount(() => {
    const setScrolled = () => {
      if (!nav) return;

      nav.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", setScrolled);
    };
  });
</script>

<svelte:head>
  <title>omniwerx</title>
</svelte:head>

<nav class="nav" bind:this={nav}>
  <div class="wrapper">
    <div class="nav__wordmark">omniwerx</div>
    <a class="nav__link" href="mailto:info@omniwerx.io">start a conversation</a>
  </div>
</nav>

<section class="hero">
  <div class="wrapper">
    <div class="hero__label">[00 / overview]</div>
    <h1 class="hero__h1">Web solutions for fitness and small businesses.</h1>
    <button class="button hero__button" type="button">
      <span>solutions</span>
    </button>
    <div class="hero__badge">
      <BadgeHero />
    </div>
  </div>
</section>

<section class="section about" aria-labelledby="about-heading">
  <div class="section__inner section__inner--narrow">
    <div class="about__label">[01 / about]</div>
    <h2 class="about__heading" id="about-heading">A focused web practice.</h2>
    <p class="about__copy">
      Omniwerx is an independent web development practice focused on frontend
      implementation and interface design for fitness, health, and small
      business operators.
    </p>
  </div>
</section>

<section class="section services" aria-labelledby="services-heading">
  <div class="wrapper services__inner">
    <div class="services__label">[02 / services]</div>
    <h2 class="services__heading" id="services-heading">
      Services built for growth.
    </h2>
    <div class="services__grid">
      <div class="services__card">
        <div class="services__card__content">
          <div class="services__card__header">Interface implementation</div>
          <div class="services__card__text">
            Pages, forms, onboarding flows, and front-end features implemented
            precisely from a defined scope.
          </div>
        </div>
        <svg
          class="services__card__number"
          viewBox="0 0 140 84"
          aria-hidden="true"
        >
          <text x="132" y="80" text-anchor="end">01</text>
        </svg>
      </div>
      <div class="services__card">
        <div class="services__card__content">
          <div class="services__card__header">Interface implementation</div>
          <div class="services__card__text">
            Pages, forms, onboarding flows, and front-end features implemented
            precisely from a defined scope.
          </div>
        </div>
        <svg
          class="services__card__number"
          viewBox="0 0 140 84"
          aria-hidden="true"
        >
          <text x="132" y="80" text-anchor="end">02</text>
        </svg>
      </div>
      <div class="services__card">
        <div class="services__card__content">
          <div class="services__card__header">Interface implementation</div>
          <div class="services__card__text">
            Pages, forms, onboarding flows, and front-end features implemented
            precisely from a defined scope.
          </div>
        </div>
        <svg
          class="services__card__number"
          viewBox="0 0 140 84"
          aria-hidden="true"
        >
          <text x="132" y="80" text-anchor="end">03</text>
        </svg>
      </div>

      <div class="services__card">
        <div class="services__card__content">
          <div class="services__card__header">Interface implementation</div>
          <div class="services__card__text">
            Pages, forms, onboarding flows, and front-end features implemented
            precisely from a defined scope.
          </div>
        </div>
        <svg
          class="services__card__number"
          viewBox="0 0 140 84"
          aria-hidden="true"
        >
          <text x="132" y="80" text-anchor="end">04</text>
        </svg>
      </div>
    </div>
  </div>
</section>
