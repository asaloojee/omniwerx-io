<script lang="ts">
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
</script>

<svelte:head>
  <title>Terms of Use | omniwerx</title>
  <meta
    name="description"
    content="Terms of use for the OMNIWERX Inc. website."
  />
</svelte:head>

<SiteNav />

<main>
  <section class="section legal" aria-labelledby="terms-heading">
    <div class="container container--narrow">
      <h1 class="legal__heading" id="terms-heading">Terms of Use</h1>
      <p class="legal__updated">Last updated: May 29, 2026</p>

      <div class="legal__body">
        <article class="legal__item" aria-labelledby="terms-overview-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">01</span>
            <span class="legal__slug">[overview]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-overview-heading">
              Agreement to these terms
            </h2>
            <p>
              These terms apply to your use of this website operated by OMNIWERX
              Inc., doing business as OMNIWERX. By using the website, you agree
              to these terms.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-content-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">02</span>
            <span class="legal__slug">[content]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-content-heading">
              Website content
            </h2>
            <p>
              The website provides general information about OMNIWERX, our
              services, and ways to contact us. Website content is provided for
              informational purposes only and may change without notice.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-services-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">03</span>
            <span class="legal__slug">[services]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-services-heading">
              Services and project terms
            </h2>
            <p>
              Submitting a form, sending an email, or booking a call does not
              create a client relationship or guarantee that we will accept a
              project. Services, scope, timelines, fees, payment terms, and
              cancellation terms are handled through separate written agreements
              or invoices.
            </p>
            <p>
              We do not currently process payments directly through this
              website. Payments may be handled through Stripe or another payment
              provider. If website checkout is added later, applicable
              transaction terms will be provided at that time.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-use-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">04</span>
            <span class="legal__slug">[use]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-use-heading">
              Acceptable use
            </h2>
            <p>
              You agree not to misuse the website, attempt unauthorized access,
              interfere with its operation, submit unlawful or harmful content,
              or use the website in a way that violates applicable law.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-ownership-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">05</span>
            <span class="legal__slug">[ownership]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-ownership-heading">
              Intellectual property
            </h2>
            <p>
              The OMNIWERX name, branding, website design, copy, graphics, and
              other website materials are owned by OMNIWERX Inc. or used with
              permission. You may not copy, modify, distribute, or reuse them
              without written permission, except as allowed by law.
            </p>
          </div>
        </article>

        <article
          class="legal__item"
          aria-labelledby="terms-third-party-heading"
        >
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">06</span>
            <span class="legal__slug">[external]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-third-party-heading">
              Third-party services
            </h2>
            <p>
              The website may link to or rely on third-party services, including
              hosting, booking, email delivery, and payment providers. We are
              not responsible for third-party websites, services, policies, or
              practices.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-warranty-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">07</span>
            <span class="legal__slug">[warranty]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-warranty-heading">
              No warranty
            </h2>
            <p>
              The website is provided “as is” and “as available.” We do not
              guarantee that it will be uninterrupted, error-free, secure, or
              always accurate.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-liability-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">08</span>
            <span class="legal__slug">[liability]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-liability-heading">
              Limitation of liability
            </h2>
            <p>
              To the extent permitted by law, OMNIWERX Inc. will not be liable
              for indirect, incidental, consequential, or special damages
              arising from your use of the website.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-law-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">09</span>
            <span class="legal__slug">[law]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-law-heading">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of Ontario and the applicable
              laws of Canada.
            </p>
          </div>
        </article>

        <article class="legal__item" aria-labelledby="terms-contact-heading">
          <div class="legal__rail" aria-hidden="true">
            <span class="legal__index">10</span>
            <span class="legal__slug">[contact]</span>
          </div>
          <div class="legal__content">
            <h2 class="legal__subheading" id="terms-contact-heading">
              Contact
            </h2>
            <p>
              Questions about these terms can be sent to <span
                class="inline-email">info@omniwerx.io</span
              >.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</main>

<SiteFooter />
