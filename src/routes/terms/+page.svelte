<script lang="ts">
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
</script>

<svelte:head>
  <title>Terms of use | omniwerx</title>
  <meta
    name="description"
    content="Terms of use for the OMNIWERX Inc. website."
  />
</svelte:head>

<SiteNav />

<main>
  <section class="section legal" aria-labelledby="terms-heading">
    <div class="section__inner section__inner--narrow">
      <h1 class="legal__heading" id="terms-heading">Terms of Use</h1>
      <p class="legal__updated">Last updated: May 29, 2026</p>

      <div class="legal__body">
        <p>
          These terms apply to your use of this website operated by OMNIWERX
          Inc., doing business as OMNIWERX. By using the website, you agree to
          these terms.
        </p>

        <h2>Website content</h2>
        <p>
          The website provides general information about OMNIWERX, our services,
          and ways to contact us. Website content is provided for informational
          purposes only and may change without notice.
        </p>

        <h2>Services and project terms</h2>
        <p>
          Submitting a form, sending an email, or booking a call does not create
          a client relationship or guarantee that we will accept a project.
          Services, scope, timelines, fees, payment terms, and cancellation
          terms are handled through separate written agreements or invoices.
        </p>
        <p>
          We do not currently process payments directly through this website.
          Payments may be handled through Stripe or another payment provider. If
          website checkout is added later, applicable transaction terms will be
          provided at that time.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          interfere with its operation, submit unlawful or harmful content, or
          use the website in a way that violates applicable law.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The OMNIWERX name, branding, website design, copy, graphics, and other
          website materials are owned by OMNIWERX Inc. or used with permission.
          You may not copy, modify, distribute, or reuse them without written
          permission, except as allowed by law.
        </p>

        <h2>Third-party services</h2>
        <p>
          The website may link to or rely on third-party services, including
          hosting, booking, email delivery, and payment providers. We are not
          responsible for third-party websites, services, policies, or
          practices.
        </p>

        <h2>No warranty</h2>
        <p>
          The website is provided “as is” and “as available.” We do not
          guarantee that it will be uninterrupted, error-free, secure, or always
          accurate.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, OMNIWERX Inc. will not be liable for
          indirect, incidental, consequential, or special damages arising from
          your use of the website.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Ontario and the applicable
          laws of Canada.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a
            href="mailto:info@omniwerx.io">info@omniwerx.io</a
          >.
        </p>
      </div>
    </div>
  </section>
</main>

<SiteFooter />
