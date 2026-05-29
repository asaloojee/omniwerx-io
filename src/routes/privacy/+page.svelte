<script lang="ts">
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
</script>

<svelte:head>
  <title>Privacy policy | omniwerx</title>
  <meta
    name="description"
    content="Privacy policy for OMNIWERX Inc., an Ontario-based digital studio."
  />
</svelte:head>

<SiteNav />

<main>
  <section class="section legal" aria-labelledby="privacy-heading">
    <div class="section__inner section__inner--narrow">
      <h1 class="legal__heading" id="privacy-heading">Privacy Policy</h1>
      <p class="legal__updated">Last updated: May 29, 2026</p>

      <div class="legal__body">
        <p>
          OMNIWERX Inc. operates this website under the trade name OMNIWERX. We
          are based in Ontario, Canada. This policy explains what information we
          collect through this website and how we use it.
        </p>

        <h2>Information we collect</h2>
        <p>
          If you contact us through the website, we may collect your name, email
          address, engagement type, message, and any details you choose to
          include. If you book a meeting through an external booking provider,
          that provider may process your booking details under its own privacy
          terms.
        </p>
        <p>
          The site is hosted through Cloudflare, including Cloudflare Workers.
          Cloudflare may process basic visitor and request data such as IP
          address, browser and device information, request metadata, approximate
          location, and security or performance logs.
        </p>

        <h2>How we use information</h2>
        <p>
          We use information to respond to inquiries, schedule conversations,
          provide requested services, maintain website security, troubleshoot
          issues, and keep appropriate business records. If email delivery is
          handled through Resend, email addresses and message metadata may be
          processed to send and manage those messages.
        </p>

        <h2>Email communication</h2>
        <p>
          By sending a message through the website, you agree that OMNIWERX may
          email you about your inquiry and related services. We do not currently
          operate a newsletter or marketing list. If that changes, marketing
          emails will include a way to unsubscribe.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          We do not currently use analytics tools or tracking cookies. The site
          may use essential technical features required for hosting, security,
          delivery, or form handling.
        </p>

        <h2>Sharing and retention</h2>
        <p>
          We do not sell personal information. Information may be shared with
          service providers that help operate the website, deliver email, host
          infrastructure, schedule meetings, or support client work. We keep
          information only as long as reasonably needed for the purposes above,
          unless a longer period is required for legal, tax, security, or
          business record reasons.
        </p>

        <h2>Your choices</h2>
        <p>
          You may contact us to request access, correction, or deletion of
          personal information we hold about you, subject to legal and business
          record requirements.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions or requests, email <a
            href="mailto:info@omniwerx.io">info@omniwerx.io</a
          >.
        </p>
      </div>
    </div>
  </section>
</main>

<SiteFooter />
