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
