<script lang="ts">
  import { onMount } from "svelte";

  let navCompressed = $state(false);

  onMount(() => {
    let frame = 0;

    const updateNavState = () => {
      frame = 0;
      navCompressed = window.scrollY > (navCompressed ? 24 : 64);
    };

    const handleScroll = () => {
      if (frame === 0) {
        frame = requestAnimationFrame(updateNavState);
      }
    };

    updateNavState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
    };
  });
</script>

<header class="nav" class:nav--compressed={navCompressed}>
  <div class="nav__inner">
    <a class="nav__wordmark" href="/" aria-label="omniwerx home">
      <img
        class="nav__wordmark-image"
        src="/wordmark.svg"
        alt="omniwerx"
        width="2026"
        height="296"
      />
      <img
        class="nav__mark-image"
        src="/logo-basic.svg"
        alt=""
        width="900"
        height="900"
        aria-hidden="true"
      />
    </a>
    <div class="nav__right">
      <nav class="nav__menu" aria-label="Primary navigation">
        <a class="nav__menu-link" href="/#studio">studio</a>
        <a class="nav__menu-link" href="/#work">work</a>
        <a class="nav__menu-link" href="/#system">system</a>
        <a class="nav__menu-link" href="/#options">options</a>
        <a class="nav__menu-link" href="/#contact">contact</a>
      </nav>
      <a
        class="button nav__cta"
        href="https://cal.com/omniwerx"
        target="_blank"
        rel="noreferrer"
      >
        <span>book call</span>
        <img
          class="nav__cta-icon"
          src="/arrow-right.svg"
          alt=""
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    isolation: isolate;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--primary-black);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--container-nav);
    min-height: var(--nav-height);
    padding: var(--space-16) var(--space-32);
    margin-inline: auto;
  }

  .nav__wordmark {
    position: relative;
    display: inline-grid;
    align-items: center;
    width: clamp(120px, 12vw, 164px);
    min-height: 32px;
    isolation: isolate;
  }

  .nav__wordmark-image {
    display: block;
    width: 100%;
    height: auto;
    clip-path: inset(0);
    opacity: 1;
    transform: translateX(0) scaleX(1);
    transform-origin: left center;
    transition-property: opacity, clip-path, transform;
    transition-duration: 280ms, 360ms, 360ms;
    transition-timing-function: var(--bezier);
  }

  .nav__mark-image {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    display: block;
    width: 28px;
    height: 28px;
    opacity: 0;
    filter: blur(2px);
    transform: translate(-10px, -50%) scale(0.72);
    transform-origin: center;
    transition-property: opacity, filter, transform;
    transition-duration: 220ms, 280ms, 360ms;
    transition-timing-function: var(--bezier);
  }

  .nav--compressed .nav__wordmark-image {
    clip-path: inset(0 84% 0 0);
    opacity: 0;
    transform: translateX(-10px) scaleX(0.82);
  }

  .nav--compressed .nav__mark-image {
    opacity: 1;
    filter: blur(0);
    transform: translate(0, -50%) scale(1);
    transition-delay: 80ms, 0ms, 0ms;
  }

  .nav__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-24);
    min-width: 0;
  }

  .nav__menu {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    min-width: 0;
  }

  .nav__menu-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: var(--space-12) var(--space-8);
    color: var(--body-text--muted);
    font-family: var(--font-mono);
    font-size: var(--text-ui);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
    transition-property: color, opacity;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .nav__menu-link:hover,
  .nav__menu-link:focus-visible {
    color: var(--body-text--emphasis);
  }

  .nav__cta {
    gap: var(--space-8);
    min-width: 0;
    white-space: nowrap;
  }

  .nav__cta-icon {
    position: relative;
    z-index: 1;
    width: 12px;
    height: 12px;
    flex: 0 0 auto;
    opacity: 0.88;
    transform: rotate(-45deg);
    transition-property: opacity;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .nav__cta:hover .nav__cta-icon,
  .nav__cta:focus-visible .nav__cta-icon {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .nav__wordmark-image,
    .nav__mark-image {
      transition-duration: 1ms;
      transition-delay: 0ms;
    }

    .nav--compressed .nav__wordmark-image {
      clip-path: inset(0);
      transform: none;
    }

    .nav__mark-image,
    .nav--compressed .nav__mark-image {
      filter: none;
      transform: translateY(-50%);
    }
  }
</style>
