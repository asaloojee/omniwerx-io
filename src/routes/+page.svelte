<script lang="ts">
  import BadgeHero from "$lib/components/BadgeHero.svelte";
</script>

<svelte:head>
  <title>omniwerx</title>
</svelte:head>

<nav class="nav">
  <div class="wrapper">
    <div class="nav__wordmark">omniwerx</div>
    <a
      class="nav__link"
      href="https://cal.com/omniwerx"
      target="_blank"
      rel="noreferrer"
    >
      <span>book call</span>
      <img
        class="nav__link-icon"
        src="/arrow-right.svg"
        alt=""
        aria-hidden="true"
      />
    </a>
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

<section class="section about" id="about" aria-labelledby="about-heading">
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

<section
  class="section services"
  id="services"
  aria-labelledby="services-heading"
>
  <div class="wrapper services__inner">
    <div class="services__label">[02 / services]</div>
    <h2 class="services__heading" id="services-heading">
      Services built for growth.
    </h2>
    <p class="services__copy">
      Placeholder body text for the services section. Use this space to frame
      the work, the outcomes, and the kinds of business needs these services
      cover.
    </p>
    <div class="services__register">
      <div class="services__header" aria-hidden="true">
        <div>no.</div>
        <div>capability</div>
        <div>application</div>
        <div>tags</div>
      </div>

      <article class="services__row">
        <div class="services__index">01</div>
        <h3 class="services__title">Interface implementation</h3>
        <p class="services__description">
          Responsive pages, forms, onboarding flows, and front-end features
          built from a defined scope.
        </p>
        <div class="services__tags">
          <span>frontend</span>
          <span>build</span>
        </div>
      </article>

      <article class="services__row">
        <div class="services__index">02</div>
        <h3 class="services__title">Site systems</h3>
        <p class="services__description">
          Component structure, CMS wiring, content models, and reusable patterns
          that keep the site maintainable.
        </p>
        <div class="services__tags">
          <span>systems</span>
          <span>structure</span>
        </div>
      </article>

      <article class="services__row">
        <div class="services__index">03</div>
        <h3 class="services__title">Conversion surfaces</h3>
        <p class="services__description">
          Landing pages, signup paths, booking flows, and offer pages shaped
          around a clear user decision.
        </p>
        <div class="services__tags">
          <span>growth</span>
          <span>ux</span>
        </div>
      </article>

      <article class="services__row">
        <div class="services__index">04</div>
        <h3 class="services__title">Maintenance and iteration</h3>
        <p class="services__description">
          Focused improvements, QA passes, performance cleanup, and steady
          changes after launch.
        </p>
        <div class="services__tags">
          <span>support</span>
          <span>polish</span>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section process" id="process" aria-labelledby="process-heading">
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

    <div class="process__procedure">
      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">01</span>
          <span class="process__step-phase">discovery</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Map the essentials.</h3>
          <p class="process__step-copy">
            Clarify goals, audiences, required pages, and operational
            constraints before any interface work begins.
          </p>
        </div>
      </article>

      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">02</span>
          <span class="process__step-phase">structure</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Shape the system.</h3>
          <p class="process__step-copy">
            Define the content hierarchy, component needs, and interaction
            details that will guide the build.
          </p>
        </div>
      </article>

      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">03</span>
          <span class="process__step-phase">implementation</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Build the interface.</h3>
          <p class="process__step-copy">
            Translate the plan into responsive pages and focused front-end
            features with review points along the way.
          </p>
        </div>
      </article>

      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">04</span>
          <span class="process__step-phase">handoff</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Prepare for launch.</h3>
          <p class="process__step-copy">
            Finalize details, verify behavior, and hand over a clean foundation
            for the next round of growth.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<section
  class="section engagements"
  id="engagements"
  aria-labelledby="engagements-heading"
>
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
        <div class="engagements__order">work 01</div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Sprint build</h3>
          <p class="engagements__card-line">Defined scope, fast delivery.</p>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">Landing pages and flows</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">Two to four weeks</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">working mode</dt>
            <dd class="engagements__meta-value">Fixed sprint</dd>
          </div>
        </dl>
        <a class="button engagements__cta" href="#contact">
          <span>Discuss sprint build</span>
          <img
            class="engagements__cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </article>

      <article class="engagements__card">
        <div class="engagements__order">work 02</div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Interface refresh</h3>
          <p class="engagements__card-line">Sharper product surfaces.</p>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">Existing sites and apps</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">Three to six weeks</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">working mode</dt>
            <dd class="engagements__meta-value">Design-led refresh</dd>
          </div>
        </dl>
        <a class="button engagements__cta" href="#contact">
          <span>Discuss interface refresh</span>
          <img
            class="engagements__cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </article>

      <article class="engagements__card">
        <div class="engagements__order">work 03</div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Ongoing support</h3>
          <p class="engagements__card-line">Steady implementation capacity.</p>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">Operators with momentum</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">Monthly or weekly</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">working mode</dt>
            <dd class="engagements__meta-value">Rolling support</dd>
          </div>
        </dl>
        <a class="button engagements__cta" href="#contact">
          <span>Plan ongoing support</span>
          <img
            class="engagements__cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </article>
    </div>
  </div>
</section>

<section class="section contact" id="contact" aria-labelledby="contact-heading">
  <div class="section__inner section__inner--narrow">
    <div class="contact__label">[05 / contact]</div>
    <h2 class="contact__heading" id="contact-heading">
      Start with a few details.
    </h2>
    <p class="contact__copy">
      Placeholder contact copy for now. Share the rough shape of the project and
      the next step you have in mind.
    </p>

    <form class="contact__form">
      <fieldset class="contact__fieldset">
        <legend class="visually-hidden">Contact details</legend>

        <label class="contact__field">
          <span class="contact__field-label">Name</span>
          <span class="contact__control-frame">
            <input
              class="contact__control"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Your name"
              required
            />
          </span>
        </label>

        <label class="contact__field">
          <span class="contact__field-label">Email</span>
          <span class="contact__control-frame">
            <input
              class="contact__control"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
            />
          </span>
        </label>

        <label class="contact__field contact__field--wide">
          <span class="contact__field-label">Message</span>
          <span class="contact__control-frame">
            <textarea
              class="contact__control contact__message"
              name="message"
              rows="4"
              placeholder="What's on your mind?"
              aria-describedby="contact-message-help"
              required
            ></textarea>
          </span>
        </label>
      </fieldset>

      <button class="button contact__submit" type="submit">
        <span>Submit inquiry</span>
        <img
          class="contact__submit-icon"
          src="/arrow-right.svg"
          alt=""
          aria-hidden="true"
        />
      </button>
    </form>
  </div>
</section>

<footer class="footer">
  <div class="footer__inner">
    <a class="footer__brand" href="/" aria-label="omniwerx home">
      <span>omniwerx</span>
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
          <a class="footer__link" href="#contact">Contact section</a>
          <a
            class="footer__link"
            href="https://cal.com/omniwerx"
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
          <a class="footer__link" href="#about">About</a>
          <a class="footer__link" href="#services">Services</a>
          <a class="footer__link" href="#process">Process</a>
          <a class="footer__link" href="#engagements">Engagements</a>
          <a class="footer__link" href="#contact">Contact</a>
        </div>
      </nav>

      <nav class="footer__column" aria-labelledby="footer-legal-heading">
        <h2 class="footer__column-heading" id="footer-legal-heading">legal</h2>
        <div class="footer__links">
          <a class="footer__link" href="/privacy">Privacy policy</a>
          <a class="footer__link" href="/legal">Legal</a>
        </div>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>© 2026 omniwerx.</p>
      <p>Independent web practice.</p>
    </div>
  </div>
</footer>
