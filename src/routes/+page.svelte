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
    <p class="services__copy">
      Placeholder body text for the services section. Use this space to frame the
      work, the outcomes, and the kinds of business needs these services cover.
    </p>
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

<section class="section process" aria-labelledby="process-heading">
  <div class="section__inner section__inner--narrow">
    <div class="process__label">[03 / process]</div>
    <h2 class="process__heading" id="process-heading">
      A clear path from idea to launch.
    </h2>
    <p class="process__copy">
      Each project moves through a simple, visible workflow so the work stays
      focused, decisions stay easy, and the final build matches the agreed
      scope.
    </p>

    <div class="process__card" aria-label="Project process">
      <article class="process__row">
        <div class="process__row-label">01 / discovery</div>
        <h3 class="process__row-heading">Map the essentials.</h3>
        <p class="process__row-copy">
          Clarify goals, audiences, required pages, and operational constraints
          before any interface work begins.
        </p>
      </article>
      <article class="process__row">
        <div class="process__row-label">02 / structure</div>
        <h3 class="process__row-heading">Shape the system.</h3>
        <p class="process__row-copy">
          Define the content hierarchy, component needs, and interaction details
          that will guide the build.
        </p>
      </article>
      <article class="process__row">
        <div class="process__row-label">03 / implementation</div>
        <h3 class="process__row-heading">Build the interface.</h3>
        <p class="process__row-copy">
          Translate the plan into responsive pages and focused front-end features
          with review points along the way.
        </p>
      </article>
      <article class="process__row">
        <div class="process__row-label">04 / handoff</div>
        <h3 class="process__row-heading">Prepare for launch.</h3>
        <p class="process__row-copy">
          Finalize details, verify behavior, and hand over a clean foundation
          for the next round of growth.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="section engagements" aria-labelledby="engagements-heading">
  <div class="wrapper engagements__inner">
    <div class="engagements__label">[04 / engagements]</div>
    <h2 class="engagements__heading" id="engagements-heading">
      Engagements shaped around the work.
    </h2>
    <p class="engagements__copy">
      Choose a focused format based on what needs to move: a scoped build, a
      design-forward refresh, or an ongoing implementation partner.
    </p>

    <div class="engagements__grid" aria-label="Engagement options">
      <article class="engagements__card">
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Sprint build</h3>
          <p class="engagements__card-line">Defined scope, fast delivery.</p>
        </div>
        <div class="engagements__card-meta">
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">best for</div>
            <div class="engagements__meta-value">Landing pages and flows</div>
          </div>
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">timeline</div>
            <div class="engagements__meta-value">Two to four weeks</div>
          </div>
        </div>
      </article>

      <article class="engagements__card">
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Interface refresh</h3>
          <p class="engagements__card-line">Sharper product surfaces.</p>
        </div>
        <div class="engagements__card-meta">
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">best for</div>
            <div class="engagements__meta-value">Existing sites and apps</div>
          </div>
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">timeline</div>
            <div class="engagements__meta-value">Three to six weeks</div>
          </div>
        </div>
      </article>

      <article class="engagements__card">
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Ongoing support</h3>
          <p class="engagements__card-line">Steady implementation capacity.</p>
        </div>
        <div class="engagements__card-meta">
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">best for</div>
            <div class="engagements__meta-value">Operators with momentum</div>
          </div>
          <div class="engagements__meta-group">
            <div class="engagements__meta-label">cadence</div>
            <div class="engagements__meta-value">Monthly or weekly</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
