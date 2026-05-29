<script lang="ts">
  import BadgeHero from "$lib/components/BadgeHero.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
</script>

<svelte:head>
  <title>omniwerx</title>
</svelte:head>

<SiteNav />

<section class="hero">
  <div class="wrapper">
    <div class="hero__label">[00 / overview]</div>
    <h1 class="hero__h1">
      Precision-engineered digital platforms for fitness and small businesses.
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
      We build performant, polished customer-facing products and ensure the
      corresponding infrastructure is set up to run smoothly. Our work can look
      like specializing in one of the below items, or folding multiple into a
      single project.
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
          <h3 class="engagements__card-heading">Diagnostic Audit</h3>
          <p class="engagements__card-line">
            A focused review before committing to a build.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">starts at</span>
          <span class="engagements__price-value">$1,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">fit</dt>
            <dd class="engagements__meta-value">
              You know something is off, but want a clear diagnosis, priorities,
              and next steps before committing to implementation.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value engagements__meta-value--list">
              <ul class="engagements__scope-list">
                <li>Interface and user journey review</li>
                <li>Forms, flows, content, and technical risks</li>
                <li>Prioritized recommendations and next steps</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">~1 week</dd>
          </div>
        </dl>
        <a class="button button--wide engagements__cta" href="#contact">
          <span>Request audit</span>
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
          <h3 class="engagements__card-heading">Scoped Project</h3>
          <p class="engagements__card-line">
            A defined build with clear scope, timeline, and handoff.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">starts at</span>
          <span class="engagements__price-value">$5,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">fit</dt>
            <dd class="engagements__meta-value">
              You have a specific site, landing page, workflow, or feature to
              ship, with budget, owner, and direction already in place.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value engagements__meta-value--list">
              <ul class="engagements__scope-list">
                <li>Responsive interface implementation</li>
                <li>Forms, CMS, automation, and tool integrations</li>
                <li>Launch support, documentation, and handoff</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">~2-6 weeks</dd>
          </div>
        </dl>
        <a class="button button--wide engagements__cta" href="#contact">
          <span>Request project</span>
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
          <h3 class="engagements__card-heading">Support Retainer</h3>
          <p class="engagements__card-line">
            Ongoing technical support for evolving needs.
          </p>
        </div>
        <div class="engagements__price">
          <span class="engagements__price-label">monthly from</span>
          <span class="engagements__price-value">$3,000</span>
          <span class="engagements__price-currency">USD</span>
        </div>
        <dl class="engagements__card-meta">
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">fit</dt>
            <dd class="engagements__meta-value">
              You have an active product or site that needs recurring senior
              attention, but not a full-time hire or open-ended project.
            </dd>
          </div>
          <div class="engagements__meta-row engagements__meta-row--scope">
            <dt class="engagements__meta-label">scope</dt>
            <dd class="engagements__meta-value engagements__meta-value--list">
              <ul class="engagements__scope-list">
                <li>Recurring technical guidance and prioritization</li>
                <li>Implementation support within agreed capacity</li>
                <li>Async reviews and scheduled check-ins</li>
              </ul>
            </dd>
          </div>
          <div class="engagements__meta-row">
            <dt class="engagements__meta-label">timeline</dt>
            <dd class="engagements__meta-value">Monthly</dd>
          </div>
        </dl>
        <a class="button button--wide engagements__cta" href="#contact">
          <span>Request retainer</span>
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
      The next step of your business is a conversation away.
    </h2>
    <p class="contact__copy">
      Let's start with a few details. Fill out the form below, or reach out to <a
        href="mailto:info@omniwerx.io">info@omniwerx.io</a
      >, and we'll reach out to you shortly.
    </p>

    <form class="contact__form">
      <div class="contact__form-grid">
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
        </fieldset>

        <div class="contact__details-grid">
          <fieldset
            class="contact__engagement"
            aria-describedby="contact-engagement-help"
          >
            <legend class="contact__field-label">Engagement</legend>
            <div class="contact__engagement-options">
              <label class="contact__engagement-option">
                <input
                  class="contact__engagement-input"
                  type="radio"
                  name="engagement"
                  value="not-sure"
                  checked
                />
                <span class="contact__engagement-row">
                  <span class="contact__engagement-name">Not sure yet</span>
                </span>
              </label>

              <label class="contact__engagement-option">
                <input
                  class="contact__engagement-input"
                  type="radio"
                  name="engagement"
                  value="audit"
                />
                <span class="contact__engagement-row">
                  <span class="contact__engagement-name">Audit</span>
                </span>
              </label>

              <label class="contact__engagement-option">
                <input
                  class="contact__engagement-input"
                  type="radio"
                  name="engagement"
                  value="project"
                />
                <span class="contact__engagement-row">
                  <span class="contact__engagement-name">Project</span>
                </span>
              </label>

              <label class="contact__engagement-option">
                <input
                  class="contact__engagement-input"
                  type="radio"
                  name="engagement"
                  value="retainer"
                />
                <span class="contact__engagement-row">
                  <span class="contact__engagement-name">Retainer</span>
                </span>
              </label>
            </div>
          </fieldset>

          <label class="contact__field contact__field--message">
            <span class="contact__field-label">Message</span>
            <span
              class="contact__control-frame contact__control-frame--message"
            >
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
        </div>
      </div>

      <button class="button button--wide contact__submit" type="submit">
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

<SiteFooter />
