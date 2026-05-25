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
    <h1 class="hero__h1">
      Web solutions designed with precision for small businesses.
    </h1>
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
    <h2 class="about__heading" id="about-heading">
      A refined website shows pride in your business.
    </h2>
    <p class="about__copy">
      OMNIWERX<sup>&trade;</sup> is an independent development studio founded by
      Abdurahmaan Saloojee. With roots in fitness and business, the studio
      brings a practical understanding of how customers act, buy, and engage
      online. OMNIWERX<sup>&trade;</sup> builds polished user interfaces, resilient
      backend systems, and cutting-edge tools for small businesses ready to grow
      with greater precision.
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
      Dependable implementation that reinforces your digital presence.
    </h2>
    <p class="services__copy">
      We build performant, polished customer-facing products and ensuring the
      corresponding infrastructure is set up to ensure they run smoothly. Our
      work can look like specializing in one of the below items, or folding
      multiple into a single project.
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
          Responsive pages, integrated forms, onboarding flows, and front-end
          features built from a defined scope.
        </p>
        <div class="services__tags">
          <span>frontend</span>
          <span>design</span>
        </div>
      </article>

      <article class="services__row">
        <div class="services__index">02</div>
        <h3 class="services__title">Content and integrations</h3>
        <p class="services__description">
          CMS wiring, blog implementation, mailing list integration, and
          anything that keeps your site organized and clean.
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
          Event landing pages, signup paths, booking flows, and offer pages
          shaped around a clear user decision.
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
          Focused improvements, QA passes, performance cleanup, feature
          integration, and steady changes after launch.
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
      Legible planning, clean execution.
    </h2>
    <p class="process__copy">
      Each project moves through a clear workflow so the work stays focused,
      decisions remain clear, and the final product matches the defined scope.
    </p>

    <div class="process__procedure">
      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">01</span>
          <span class="process__step-phase">discovery</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Clarify what matters.</h3>
          <p class="process__step-copy">
            Determine objectives, required pages, and operational constraints
            before any implementation begins.
          </p>
        </div>
      </article>

      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">02</span>
          <span class="process__step-phase">structure</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Shape the project scope.</h3>
          <p class="process__step-copy">
            Define the required pages, structure content models, and agree on
            what the end result looks like.
          </p>
        </div>
      </article>

      <article class="process__step">
        <div class="process__step-marker">
          <span class="process__step-number">03</span>
          <span class="process__step-phase">implementation</span>
        </div>
        <div class="process__step-body">
          <h3 class="process__step-heading">Execute cleanly.</h3>
          <p class="process__step-copy">
            Prototype the interface, implement the features, and test user
            journeys with review touchpoints along the way.
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
            Finalize details, verify outcomes, and hand over a polished final
            build that's ready to support your digital presence.
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
      What a work agreement looks like.
    </h2>
    <p class="engagements__copy">
      The following options frame how work is organized. Each format presents a
      different level of scope, involvement, and continuity.
    </p>

    <div class="engagements__grid" aria-label="Engagement options">
      <article class="engagements__card">
        <div class="engagements__order">
          <span>work 01</span>
        </div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Site audit</h3>
          <p class="engagements__card-line">
            Diagnostic review before committing to a build.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">starts at</span>
          <span class="engagements__price-value">$1,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">
              Businesses that know something is off and need a clear next step.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value">
              <ul class="engagements__scope-list">
                <li>Interface and user journey review</li>
                <li>Forms, flows, content, and technical notes</li>
                <li>Stylistic review and recommendations</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">1 week</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">mode</dt>
            <dd class="engagements__meta-value">Audit and advisory call</dd>
          </div>
        </dl>
        <p class="engagements__fit-note">
          <span>fit note</span>
          Best when you want to make a change, but you're not sure where to start.
        </p>
        <a class="button engagements__cta" href="#contact">
          <span>Request diagnostic</span>
          <img
            class="engagements__cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </article>

      <article class="engagements__card">
        <div class="engagements__order">
          <span>work 02</span>
        </div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Scoped project</h3>
          <p class="engagements__card-line">
            A defined build or feature implementation with supporting
            integrations.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">starts at</span>
          <span class="engagements__price-value">$5,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">
              Businesses with a clear site, landing page, flow, or feature need.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value">
              <ul class="engagements__scope-list">
                <li>Responsive interface implementation</li>
                <li>Forms, CMS, and tool integrations</li>
                <li>Email campaign direction</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">2-6 weeks</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">mode</dt>
            <dd class="engagements__meta-value">
              Defined scope with review points
            </dd>
          </div>
        </dl>
        <p class="engagements__fit-note">
          <span>fit note</span>
          Best when budget and direction already exist; scope is agreed before production
          begins.
        </p>
        <a class="button engagements__cta" href="#contact">
          <span>Request project fit</span>
          <img
            class="engagements__cta-icon"
            src="/arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </a>
      </article>

      <article class="engagements__card">
        <div class="engagements__order">
          <span>work 03</span>
        </div>
        <div class="engagements__card-top">
          <h3 class="engagements__card-heading">Reserved capacity</h3>
          <p class="engagements__card-line">
            Long-term implementation support within a defined monthly lane.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">monthly from</span>
          <span class="engagements__price-value">$3,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">best for</dt>
            <dd class="engagements__meta-value">
              Operators with an existing site and steady improvement needs.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value">
              <ul class="engagements__scope-list">
                <li>Scheduled frontend updates</li>
                <li>Maintenance, QA, and performance cleanup</li>
                <li>Forms, content, and tool integrations</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">Monthly cadence</dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">mode</dt>
            <dd class="engagements__meta-value">Reserved monthly capacity</dd>
          </div>
        </dl>
        <p class="engagements__fit-note">
          <span>fit note</span>
          Provides continuity without unlimited access or full-time availability.
        </p>
        <a class="button engagements__cta" href="#contact">
          <span>Request reserved capacity</span>
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
