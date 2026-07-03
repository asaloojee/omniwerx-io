<script lang="ts">
  import { onMount } from "svelte";

  let navCompressed = $state(false);
  let navOpen = $state(false);

  const closeNav = () => {
    navOpen = false;
  };

  const toggleNav = () => {
    navOpen = !navOpen;
  };

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

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    updateNavState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);

      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
    };
  });
</script>

<header
  class="nav"
  class:nav--compressed={navCompressed}
  class:nav--open={navOpen}
>
  <div class="nav__inner">
    <a
      class="nav__wordmark"
      href="/"
      aria-label="omniwerx home"
      onclick={closeNav}
    >
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
      <nav
        class="nav__menu"
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <a class="nav__menu-link" href="/#about" onclick={closeNav}>
          <span class="nav__menu-index" aria-hidden="true">[01]</span>
          <span class="nav__menu-label">About</span>
        </a>
        <a class="nav__menu-link" href="/#work" onclick={closeNav}>
          <span class="nav__menu-index" aria-hidden="true">[02]</span>
          <span class="nav__menu-label">Work</span>
        </a>
        <a class="nav__menu-link" href="/#system" onclick={closeNav}>
          <span class="nav__menu-index" aria-hidden="true">[03]</span>
          <span class="nav__menu-label">System</span>
        </a>
        <a class="nav__menu-link" href="/#options" onclick={closeNav}>
          <span class="nav__menu-index" aria-hidden="true">[04]</span>
          <span class="nav__menu-label">Options</span>
        </a>
        <a class="nav__menu-link" href="/#contact" onclick={closeNav}>
          <span class="nav__menu-index" aria-hidden="true">[05]</span>
          <span class="nav__menu-label">Contact</span>
        </a>
        <a
          class="button nav__menu-link nav__menu-link--mobile-cta"
          href="https://calendar.proton.me/bookings#Bn1P9_OS9N8HFh93m7mEObSeGWPtb8qSjkYlB3Xp_GA="
          target="_blank"
          rel="noreferrer"
          onclick={closeNav}
        >
          <span class="nav__menu-label">Book Call</span>
          <img
            class="nav__menu-cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </nav>
      <a
        class="button nav__cta"
        href="https://calendar.proton.me/bookings#Bn1P9_OS9N8HFh93m7mEObSeGWPtb8qSjkYlB3Xp_GA="
        target="_blank"
        rel="noreferrer"
        onclick={closeNav}
      >
        <span>Book Call</span>
        <img
          class="nav__cta-icon"
          src="/arrow-right.svg"
          alt=""
          aria-hidden="true"
        />
      </a>
      <button
        class="nav__toggle"
        type="button"
        aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="primary-navigation"
        aria-expanded={navOpen}
        onclick={toggleNav}
      >
        <img
          class="nav__toggle-icon nav__toggle-icon--closed"
          src="/nav-icon--closed.svg"
          alt=""
          width="100"
          height="100"
          aria-hidden="true"
        />
        <img
          class="nav__toggle-icon nav__toggle-icon--open"
          src="/nav-icon--open.svg"
          alt=""
          width="100"
          height="100"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    isolation: isolate;
    background-color: var(--primary-black);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--container-nav);
    min-height: var(--nav-height);
    padding: var(--space-16) var(--site-gutter);
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
    gap: var(--space-32);
    min-width: 0;
  }

  .nav__menu {
    display: flex;
    align-items: center;
    gap: var(--space-32);
    min-width: 0;
  }

  .nav__menu-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    padding: 4px;
    overflow: hidden;
    isolation: isolate;
    color: var(--body-text--emphasis);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: 500;
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-ui);
    text-transform: none;
  }

  .nav__menu-link:not(.nav__menu-link--mobile-cta)::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: var(--nav-accent-wash);
    transform: scaleX(0);
    transform-origin: left;
    transition-property: transform;
    transition-duration: var(--duration-wash-compact);
    transition-timing-function: var(--bezier);
  }

  .nav__menu-index {
    position: relative;
    z-index: 1;
    display: none;
  }

  .nav__menu-label {
    position: relative;
    z-index: 1;
  }

  .nav__menu-link:hover::before,
  .nav__menu-link:focus-visible::before,
  .nav__menu-link:active::before {
    transform: scaleX(1);
  }

  .nav__menu-link--mobile-cta {
    display: none;
  }

  .nav__cta {
    gap: var(--space-8);
    min-width: 0;
    font-weight: 700;
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

  .nav__toggle {
    position: relative;
    display: none;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .nav__toggle-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
    transition-property: opacity, filter, transform;
    transition-duration: 220ms, 280ms, 300ms;
    transition-timing-function: var(--bezier);
  }

  .nav__toggle-icon--open {
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.25);
  }

  .nav--open .nav__toggle-icon--closed {
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.25);
  }

  .nav--open .nav__toggle-icon--open {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }

  @media (max-width: 991px) {
    .nav__inner {
      padding: var(--space-12) var(--site-gutter);
    }

    .nav__right {
      gap: 0;
    }

    .nav__menu {
      position: absolute;
      inset-block-start: 100%;
      inset-inline: 0;
      display: none;
      gap: 0;
      padding: var(--space-12) var(--site-gutter) var(--space-20);
      border-bottom: 1px solid var(--border-color);
      background-color: var(--primary-black);
    }

    .nav--open .nav__menu {
      display: grid;
    }

    .nav__menu-link {
      justify-content: flex-start;
      gap: var(--space-12);
      min-height: 48px;
      padding-block: 0;
      font-size: var(--text-ui);
    }

    .nav__menu-index {
      display: inline-flex;
      width: 5ch;
      flex: 0 0 auto;
      color: var(--body-text--subtle);
      font-size: var(--text-meta);
      letter-spacing: var(--tracking-meta);
    }

    .nav__menu-link--mobile-cta {
      display: inline-flex;
      justify-content: space-between;
      gap: var(--space-12);
      width: 100%;
      padding: var(--space-16) var(--space-20);
      margin-top: var(--space-12);
      background-color: var(--button-accent-rest);
      color: var(--body-text--emphasis);
      font-family: var(--font-sans);
      font-size: var(--text-ui);
      font-weight: 500;
      line-height: var(--leading-ui);
      letter-spacing: var(--tracking-caps);
      text-align: left;
      text-transform: uppercase;
    }

    .nav__menu-cta-icon {
      position: relative;
      z-index: 1;
      width: 16px;
      height: 16px;
      flex: 0 0 auto;
      opacity: 0.88;
      transform: rotate(-45deg);
      transition-property: opacity;
      transition-duration: var(--duration-fast);
      transition-timing-function: var(--bezier);
    }

    .nav__menu-link--mobile-cta:hover .nav__menu-cta-icon,
    .nav__menu-link--mobile-cta:focus-visible .nav__menu-cta-icon {
      opacity: 1;
    }

    .nav__cta {
      display: none;
    }

    .nav__toggle {
      display: grid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nav__wordmark-image,
    .nav__mark-image,
    .nav__toggle-icon,
    .nav__menu-link:not(.nav__menu-link--mobile-cta)::before,
    .nav__menu-link--mobile-cta::before,
    .nav__menu-cta-icon {
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

    .nav__toggle-icon,
    .nav--open .nav__toggle-icon {
      filter: none;
    }
  }
</style>
