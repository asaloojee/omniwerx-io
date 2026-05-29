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
