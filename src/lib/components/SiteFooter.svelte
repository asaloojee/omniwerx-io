<footer class="footer">
  <div class="container footer__inner">
    <a class="footer__brand" href="/" aria-label="omniwerx home">
      <img
        class="footer__brand-image"
        src="/wordmark.svg"
        alt=""
        width="2026"
        height="296"
      />
    </a>

    <div class="footer__utility">
      <section class="footer__column" aria-labelledby="footer-contact-heading">
        <h2 class="footer__column-heading" id="footer-contact-heading">
          contact
        </h2>
        <div class="footer__links">
          <a class="footer__link" href="mailto:info@omniwerx.io">
            info@omniwerx.io
          </a>
          <a class="footer__link" href="/#contact">Send a message</a>
          <a
            class="footer__link"
            href="https://calendar.proton.me/bookings#Bn1P9_OS9N8HFh93m7mEObSeGWPtb8qSjkYlB3Xp_GA="
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </a>
        </div>
      </section>

      <nav class="footer__column" aria-labelledby="footer-navigation-heading">
        <h2 class="footer__column-heading" id="footer-navigation-heading">
          navigation
        </h2>
        <div class="footer__links">
          <a class="footer__link" href="/#studio">Studio</a>
          <a class="footer__link" href="/#work">Work</a>
          <a class="footer__link" href="/#system">System</a>
          <a class="footer__link" href="/#options">Options</a>
          <a class="footer__link" href="/#contact">Contact</a>
        </div>
      </nav>

      <nav class="footer__column" aria-labelledby="footer-legal-heading">
        <h2 class="footer__column-heading" id="footer-legal-heading">legal</h2>
        <div class="footer__links">
          <a class="footer__link" href="/privacy">Privacy policy</a>
          <a class="footer__link" href="/terms">Terms of use</a>
        </div>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>© 2026 omniwerx.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding-block: clamp(var(--space-56), 8vw, var(--space-96)) var(--space-32);
    border-top: 1px solid color-mix(in srgb, var(--border-color) 72%, transparent);
  }

  .footer__brand {
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding-bottom: clamp(var(--space-20), 3vw, var(--space-40));
  }

  .footer__brand-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .footer__utility {
    --footer-utility-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 0.8fr);

    display: grid;
    grid-template-columns: var(--footer-utility-columns);
  }

  .footer__column {
    min-width: 0;
    padding: clamp(var(--space-20), 3vw, var(--space-32))
      clamp(var(--space-20), 3vw, var(--space-28));
  }

  .footer__column-heading {
    margin-bottom: 0;
    padding: 0 var(--space-12) var(--space-16);
    border-bottom: 1px solid var(--border-color);
    color: var(--body-text--muted);
    font-family: var(--font-mono);
    font-size: var(--text-ui);
    font-weight: 400;
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
  }

  .footer__links {
    display: grid;
  }

  .footer__link {
    display: flex;
    align-items: center;
    min-height: var(--control-height-md);
    padding: var(--space-12);
    color: var(--body-text--emphasis);
    font-size: var(--text-body);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-title);
  }

  .footer__link + .footer__link {
    border-top: 1px dashed var(--border-color);
  }

  .footer__column:first-child .footer__link {
    font-size: 18px;
  }

  .footer__bottom {
    display: flex;
    justify-content: space-between;
    gap: var(--space-24);
    padding-top: var(--space-20);
    color: var(--body-text--subtle);
    font-family: var(--font-mono);
    font-size: var(--text-meta);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
  }

  @media (max-width: 991px) {
    .footer__utility {
      --footer-utility-columns: 1fr;
    }

    .footer__column {
      padding-inline: 0;
    }

    .footer__bottom {
      flex-direction: column;
      gap: var(--space-8);
    }
  }
</style>
