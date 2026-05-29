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
  <div class="wrapper">
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
        <a class="nav__menu-link" href="/#about">about</a>
        <a class="nav__menu-link" href="/#services">services</a>
        <a class="nav__menu-link" href="/#process">process</a>
        <a class="nav__menu-link" href="/#engagements">engagements</a>
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
