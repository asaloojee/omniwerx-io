<script lang="ts">
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
</script>

<svelte:head>
  <title>Privacy Policy | omniwerx</title>
  <meta
    name="description"
    content="Privacy policy for OMNIWERX Inc., doing business as omniwerx."
  />
</svelte:head>

<SiteNav />

<main>
  <section class="section legal" aria-labelledby="privacy-heading">
    <div class="container container--narrow">
      <h1 class="legal__heading" id="privacy-heading">Privacy Policy</h1>
      <p class="legal__updated">Last updated: May 29, 2026</p>

      <div class="legal__body">
        <article class="legal__item" aria-labelledby="privacy-overview-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">01</span>
            <span class="legal__slug">[overview]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-overview-heading">
              What this policy covers
            </h2>
            <p>
              OMNIWERX Inc. operates this website under the trade name omniwerx.
              We are based in Ontario, Canada. This policy explains what
              information we collect through this website and how we use it.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-data-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">02</span>
            <span class="legal__slug">[data]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-data-heading">
              Information we collect
            </h2>
            <p>
              If you contact us through the website, we may collect your name,
              email address, engagement type, message, and any details you
              choose to include. If you book a meeting through an external
              booking provider, that provider may process your booking details
              under its own privacy terms.
            </p>
            <p>
              The site is hosted through Cloudflare, including Cloudflare
              Workers. Cloudflare may process basic visitor and request data
              such as IP address, browser and device information, request
              metadata, approximate location, and security or performance logs.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-use-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">03</span>
            <span class="legal__slug">[use]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-use-heading">
              How we use information
            </h2>
            <p>
              We use information to respond to inquiries, schedule
              conversations, provide requested services, maintain website
              security, troubleshoot issues, and keep appropriate business
              records. If email delivery is handled through Resend, email
              addresses and message metadata may be processed to send and manage
              those messages.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-email-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">04</span>
            <span class="legal__slug">[email]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-email-heading">
              Email communication
            </h2>
            <p>
              By sending a message through the website, you agree that OMNIWERX
              Inc. may email you about your inquiry and related services. We do
              not currently operate a newsletter or marketing list. If that
              changes, marketing emails will include a way to unsubscribe.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-cookies-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">05</span>
            <span class="legal__slug">[cookies]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-cookies-heading">
              Cookies and analytics
            </h2>
            <p>
              We do not currently use analytics tools or tracking cookies. The
              site may use essential technical features required for hosting,
              security, delivery, or form handling.
            </p>
          </div>
        </article>

        <article
          class="legal__item"
          aria-labelledby="privacy-retention-heading"
        >
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">06</span>
            <span class="legal__slug">[retention]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-retention-heading">
              Sharing and retention
            </h2>
            <p>
              We do not sell personal information. Information may be shared
              with service providers that help operate the website, deliver
              email, host infrastructure, schedule meetings, or support client
              work. We keep information only as long as reasonably needed for
              the purposes above, unless a longer period is required for legal,
              tax, security, or business record reasons.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-choices-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">07</span>
            <span class="legal__slug">[choices]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-choices-heading">
              Your choices
            </h2>
            <p>
              You may contact us to request access, correction, or deletion of
              personal information we hold about you, subject to legal and
              business record requirements.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="privacy-contact-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">08</span>
            <span class="legal__slug">[contact]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="privacy-contact-heading">
              Contact
            </h2>
            <p>
              For privacy questions or requests, email <a
                href="mailto:info@omniwerx.io">info@omniwerx.io</a
              >.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</main>

<SiteFooter />
