<script lang="ts">
  import { enhance } from "$app/forms";
  import { tick } from "svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";

  type Option = {
    value: string;
    label: string;
  };

  type SurveyFormValues = {
    email?: string;
    clientVolume?: string;
    workflowAreas?: string[];
    otherWorkflowTool?: string;
    coachingAppExperience?: string;
    coachingAppBarrier?: string;
    friction?: string;
    otherFriction?: string;
    monthlyToolSpend?: string;
  };

  type SurveyFormData = {
    error?: string;
    message?: string;
    values?: SurveyFormValues;
  } | null;

  const clientVolumeOptions: Option[] = [
    { value: "1-5", label: "1–5" },
    { value: "6-15", label: "6–15" },
    { value: "16-30", label: "16–30" },
    { value: "31-50", label: "31–50" },
    { value: "50-plus", label: "50+" },
  ];

  const workflowAreaOptions: Option[] = [
    { value: "sheets-excel", label: "Google Sheets or Excel" },
    { value: "notion-airtable", label: "Notion or Airtable" },
    {
      value: "dedicated-coaching-app",
      label:
        "A dedicated coaching app (Trainerize, TrueCoach, Everfit, CoachRx, etc.)",
    },
    { value: "loom-video", label: "Loom or video recording" },
    {
      value: "messaging",
      label: "WhatsApp, Instagram, Telegram, or iMessage for sending feedback",
    },
    {
      value: "shared-drive",
      label: "Shared Google Drive or Dropbox for photos",
    },
  ];

  const coachingAppExperienceOptions: Option[] = [
    { value: "use-now", label: "I use one now" },
    { value: "tried-stopped", label: "I tried one and stopped" },
    { value: "never-tried", label: "I’ve never tried one" },
  ];

  const frictionOptions: Option[] = [
    {
      value: "assemble-review",
      label: "Pulling up and assembling everything to review",
    },
    { value: "review-data-photos", label: "Reviewing the data and photos" },
    { value: "recording-feedback", label: "Recording the video feedback" },
    {
      value: "sending-tracking",
      label: "Sending it and tracking who’s done",
    },
  ];

  const monthlyToolSpendOptions: Option[] = [
    { value: "0", label: "$0" },
    { value: "under-30", label: "Under $30" },
    { value: "30-75", label: "$30–75" },
    { value: "75-150", label: "$75–150" },
    { value: "150-plus", label: "$150+" },
  ];

  let { form }: { form: SurveyFormData } = $props();

  let email = $state("");
  let surveyStarted = $state(false);
  let submitted = $state(false);
  let isSubmitting = $state(false);
  let workflowAreas = $state<string[]>([]);
  let otherWorkflowTool = $state("");
  let coachingAppExperience = $state("");
  let coachingAppBarrier = $state("");
  let friction = $state("");
  let otherFriction = $state("");

  $effect(() => {
    if (form?.values) {
      email = form.values.email ?? "";
      surveyStarted = true;
      workflowAreas = form.values.workflowAreas ?? [];
      otherWorkflowTool = form.values.otherWorkflowTool ?? "";
      coachingAppExperience = form.values.coachingAppExperience ?? "";
      coachingAppBarrier = form.values.coachingAppBarrier ?? "";
      friction = form.values.friction ?? "";
      otherFriction = form.values.otherFriction ?? "";
    }

    if (form?.message) submitted = true;
  });

  const beginSurvey = async (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) return;

    surveyStarted = true;
    submitted = false;

    await tick();
    document.getElementById("survey-form-heading")?.focus();
  };

  const validateSurvey = (formElement: HTMLFormElement) => {
    const workflowInputs = Array.from(
      formElement.querySelectorAll<HTMLInputElement>(
        'input[name="workflow-areas"]',
      ),
    );
    const checkedWorkflowInputs = workflowInputs.filter(
      (input) => input.checked,
    );
    const workflowOtherInput = formElement.querySelector<HTMLInputElement>(
      'input[name="workflow-areas-other"]',
    );
    const frictionOtherInput = formElement.querySelector<HTMLInputElement>(
      'input[name="friction-other"]',
    );

    workflowInputs.forEach((input) => input.setCustomValidity(""));
    workflowOtherInput?.setCustomValidity("");
    frictionOtherInput?.setCustomValidity("");

    if (workflowInputs[0] && checkedWorkflowInputs.length === 0) {
      workflowInputs[0].setCustomValidity("Choose at least one tool.");
    }

    if (workflowAreas.includes("other") && !otherWorkflowTool.trim()) {
      workflowOtherInput?.setCustomValidity("Add the other tool.");
    }

    if (friction === "other" && !otherFriction.trim()) {
      frictionOtherInput?.setCustomValidity("Add the other check-in step.");
    }

    return formElement.reportValidity();
  };

  const enhanceSurvey: SubmitFunction = ({ formElement, cancel }) => {
    if (!validateSurvey(formElement)) {
      cancel();
      return;
    }

    isSubmitting = true;

    return async ({ result, update }) => {
      isSubmitting = false;
      submitted = result.type === "success";
      await update({
        invalidateAll: false,
        reset: result.type === "success",
      });

      if (result.type === "success") {
        await tick();
        document.getElementById("survey-complete")?.focus();
      }
    };
  };
</script>

<svelte:head>
  <title>Coach Workflow Survey | omniwerx</title>
  <meta
    name="description"
    content="A short coach workflow survey for product research by omniwerx."
  />
  <link rel="canonical" href="https://omniwerx.io/survey" />
  <meta property="og:title" content="Coach Workflow Survey | omniwerx" />
  <meta
    property="og:description"
    content="A short coach workflow survey for product research by omniwerx."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://omniwerx.io/survey" />
  <meta property="og:image" content="https://omniwerx.io/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<SiteNav />

<main>
  {#if !surveyStarted}
    <section
      class="survey-landing layout-wide"
      aria-labelledby="survey-landing-heading"
    >
      <div class="survey-landing__inner">
        <div class="survey-landing__content">
          <p class="survey__label">[00 / workflow survey]</p>
          <h1 class="survey-landing__heading" id="survey-landing-heading">
            I want to know more about how you work.
          </h1>
          <p class="survey-landing__copy">
            This questionnaire is used to gather data for a product intended to
            expedite online coaching workflows and raise the ceiling on earning
            potential. If that sounds interesting, drop your email and begin the
            survey.
          </p>
        </div>

        <form class="survey-gate" onsubmit={beginSurvey}>
          <div class="survey-gate__meta" aria-hidden="true">
            <span>estimated time</span>
            <span>04 min</span>
          </div>
          <label class="survey__field">
            <span class="survey__field-label">Email</span>
            <span class="survey__control-frame">
              <input
                class="survey__control"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="you@example.com"
                bind:value={email}
                maxlength="254"
                required
              />
            </span>
          </label>
          <p class="survey-gate__note">
            Used to relate your responses to a follow-up if useful. We won't
            spam you.
          </p>
          <button class="button button--wide survey-gate__button" type="submit">
            <span>Begin survey</span>
            <img
              class="survey__button-icon"
              src="/arrow-right.svg"
              alt=""
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </section>
  {:else}
    <section
      class="section survey layout-wide"
      aria-labelledby="survey-form-heading"
    >
      <div class="survey__inner">
        <aside class="survey__aside" aria-label="Survey progress">
          <p class="survey__label">[01 / active survey]</p>
          <h1 class="survey__heading" id="survey-form-heading" tabindex="-1">
            Coaching workflow research.
          </h1>
          <p class="survey__copy">
            Answer to the best of your abilities. If you're not sure, please
            reach out with any questions: <a
              href="mailto:info@omniwerx.io"
              class="inline-email">info@omniwerx.io</a
            >
          </p>
          <dl class="survey__stats">
            <div class="survey__stat">
              <dt>respondent</dt>
              <dd>{email}</dd>
            </div>
            <div class="survey__stat">
              <dt>format</dt>
              <dd>05 prompts</dd>
            </div>
          </dl>
        </aside>

        {#if submitted}
          <div class="survey-complete" id="survey-complete" tabindex="-1">
            <p class="survey__label">[complete]</p>
            <h2 class="survey-complete__heading">
              Your responses have been processed.
            </h2>
            <p class="survey-complete__copy">
              Thank you for taking the time to fill this survey out. Our
              intention is to build something that will save you time in orders
              of magnitude more, while helping you build a more lucrative,
              successful business. We'll reach out if we need your insight, or
              when we have any announcements.
            </p>
            <a class="button survey-complete__button" href="/">
              <span>Return home</span>
            </a>
          </div>
        {:else}
          <form class="survey-form" method="POST" use:enhance={enhanceSurvey}>
            <input type="hidden" name="email" value={email} />
            <label class="survey__honeypot" aria-hidden="true">
              <span>Website</span>
              <input
                type="text"
                name="website"
                autocomplete="off"
                tabindex="-1"
              />
            </label>

            <div
              class="survey-question"
              role="group"
              aria-labelledby="survey-question-01"
            >
              <div class="survey-question__legend">
                <span class="survey-question__index">[01]</span>
                <span class="survey-question__title" id="survey-question-01">
                  How many active online coaching clients do you currently have?
                </span>
              </div>
              <p class="survey-question__helper">
                Select one from the following.
              </p>
              <div class="survey__options">
                {#each clientVolumeOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="radio"
                      name="client-volume"
                      value={option.value}
                      checked={form?.values?.clientVolume === option.value}
                      required
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"
                      ></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}
              </div>
            </div>

            <div
              class="survey-question"
              role="group"
              aria-labelledby="survey-question-02"
            >
              <div class="survey-question__legend">
                <span class="survey-question__index">[02]</span>
                <span class="survey-question__title" id="survey-question-02">
                  Which tools are part of your weekly check-in process?
                </span>
              </div>
              <p class="survey-question__helper">Choose all that apply.</p>
              <div class="survey__options survey__options--grid">
                {#each workflowAreaOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="checkbox"
                      name="workflow-areas"
                      value={option.value}
                      bind:group={workflowAreas}
                    />
                    <span
                      class="survey__option-body survey__option-body--checkbox"
                    >
                      <span class="survey__option-marker" aria-hidden="true"
                      ></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}

                <label class="survey__option survey__option--other">
                  <input
                    class="survey__option-input"
                    type="checkbox"
                    name="workflow-areas"
                    value="other"
                    bind:group={workflowAreas}
                  />
                  <span
                    class="survey__option-body survey__option-body--checkbox"
                  >
                    <span class="survey__option-marker" aria-hidden="true"
                    ></span>
                    <span>Other</span>
                  </span>
                </label>
              </div>

              {#if workflowAreas.includes("other")}
                <label class="survey__other-field">
                  <span class="survey__field-label">Other</span>
                  <span class="survey__control-frame">
                    <input
                      class="survey__control"
                      type="text"
                      name="workflow-areas-other"
                      placeholder="Add another tool"
                      bind:value={otherWorkflowTool}
                      maxlength="180"
                      required
                    />
                  </span>
                </label>
              {/if}
            </div>

            <div
              class="survey-question"
              role="group"
              aria-labelledby="survey-question-03"
            >
              <div class="survey-question__legend">
                <span class="survey-question__index">[03]</span>
                <span class="survey-question__title" id="survey-question-03">
                  Have you ever used a dedicated all-in-one coaching app?
                </span>
              </div>
              <p class="survey-question__helper">
                Select one from the following.
              </p>
              <div class="survey__options">
                {#each coachingAppExperienceOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="radio"
                      name="coaching-app-experience"
                      value={option.value}
                      bind:group={coachingAppExperience}
                      required
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"
                      ></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}
              </div>
              {#if coachingAppExperience === "tried-stopped" || coachingAppExperience === "never-tried"}
                <label class="survey__other-field">
                  <span class="survey__field-label">
                    If you stopped or never adopted one, what kept you from it?
                    (optional)
                  </span>
                  <span class="survey__control-frame">
                    <input
                      class="survey__control"
                      id="short-answer"
                      type="text"
                      name="coaching-app-barrier"
                      placeholder="Brief response"
                      bind:value={coachingAppBarrier}
                      maxlength="180"
                    />
                  </span>
                </label>
              {/if}
            </div>

            <div
              class="survey-question"
              role="group"
              aria-labelledby="survey-question-04"
            >
              <div class="survey-question__legend">
                <span class="survey-question__index">[04]</span>
                <span class="survey-question__title" id="survey-question-04">
                  Which single step in a check-in takes you the most time?
                </span>
              </div>
              <p class="survey-question__helper">
                Select one, or specify by selecting "other".
              </p>
              <div class="survey__options">
                {#each frictionOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="radio"
                      name="friction"
                      value={option.value}
                      bind:group={friction}
                      required
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"
                      ></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}

                <label class="survey__option survey__option--other">
                  <input
                    class="survey__option-input"
                    type="radio"
                    name="friction"
                    value="other"
                    bind:group={friction}
                    required
                  />
                  <span class="survey__option-body">
                    <span class="survey__option-marker" aria-hidden="true"
                    ></span>
                    <span>Other</span>
                  </span>
                </label>
              </div>

              {#if friction === "other"}
                <label class="survey__other-field">
                  <span class="survey__field-label">Other</span>
                  <span class="survey__control-frame">
                    <input
                      class="survey__control"
                      type="text"
                      name="friction-other"
                      placeholder="Add another option"
                      bind:value={otherFriction}
                      maxlength="180"
                      required
                    />
                  </span>
                </label>
              {/if}
            </div>

            <div
              class="survey-question"
              role="group"
              aria-labelledby="survey-question-05"
            >
              <div class="survey-question__legend">
                <span class="survey-question__index">[05]</span>
                <span class="survey-question__title" id="survey-question-05">
                  Roughly how much do you spend per month on coaching software
                  and tools combined?
                </span>
              </div>
              <p class="survey-question__helper">
                Select the range that best applies.
              </p>
              <div class="survey__options">
                {#each monthlyToolSpendOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="radio"
                      name="monthly-tool-spend"
                      value={option.value}
                      checked={form?.values?.monthlyToolSpend === option.value}
                      required
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"
                      ></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}
              </div>
            </div>

            <button
              class="button button--wide survey-form__submit"
              type="submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Submitting..." : "Submit survey"}</span>
              <img
                class="survey__button-icon"
                src="/arrow-right.svg"
                alt=""
                aria-hidden="true"
              />
            </button>

            <div class="survey__feedback">
              {#if form?.error}
                <p class="survey__status survey__status--error" role="alert">
                  {form.error}
                </p>
              {/if}
            </div>
          </form>
        {/if}
      </div>
    </section>
  {/if}
</main>

<SiteFooter />

<style>
  .survey-landing {
    display: grid;
    align-items: center;
    min-block-size: calc(100svh - var(--nav-height));
    padding-block: clamp(104px, 14vw, 168px) var(--section-padding-y-tight);
  }

  @supports (height: 100dvh) {
    .survey-landing {
      min-block-size: calc(100dvh - var(--nav-height));
    }
  }

  .survey-landing__inner,
  .survey__inner {
    width: 100%;
    margin-inline: auto;
  }

  .survey-landing__inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.52fr);
    gap: clamp(var(--space-48), 7vw, 104px);
    align-items: center;
  }

  .survey-landing__content {
    max-width: 760px;
  }

  .survey__label {
    margin-bottom: var(--section-label-gap);
    color: var(--body-text--muted);
    font-family: var(--font-mono);
    font-size: var(--text-meta);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
  }

  .survey-landing__heading,
  .survey__heading,
  .survey-complete__heading {
    color: var(--body-text--emphasis);
    line-height: var(--leading-heading);
    letter-spacing: var(--tracking-heading);
    text-wrap: balance;
  }

  .survey-landing__heading {
    max-width: 780px;
    margin-bottom: var(--section-heading-gap);
    font-size: var(--text-display);
  }

  .survey-landing__copy,
  .survey__copy,
  .survey-complete__copy {
    color: var(--body-text);
    font-size: var(--text-body);
    line-height: var(--leading-body);
    letter-spacing: var(--tracking-body);
    text-wrap: pretty;
  }

  .survey-landing__copy {
    max-width: 620px;
    font-size: var(--text-lead);
  }

  .survey-gate {
    display: grid;
    gap: var(--space-20);
    padding-block: var(--space-28);
  }

  .survey-gate__meta,
  .survey__stats,
  .survey__field-label,
  .survey-question__index,
  .survey-question__helper,
  .survey__stat dt {
    font-family: var(--font-mono);
    font-size: var(--text-meta);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
  }

  .survey-gate__meta {
    display: flex;
    justify-content: space-between;
    gap: var(--space-16);
    padding-bottom: var(--space-16);
    border-bottom: 1px solid var(--border-color);
    color: var(--body-text--muted);
  }

  .survey__field,
  .survey__other-field {
    display: grid;
    gap: var(--space-12);
    min-width: 0;
  }

  .survey__field-label {
    color: var(--body-text--muted);
  }

  .survey__control-frame {
    position: relative;
    display: block;
  }

  .survey__control-frame::before,
  .survey__control-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    transition-property: opacity, transform;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .survey__control-frame::before {
    border: 1px dashed var(--border-color);
    opacity: 1;
  }

  .survey__control-frame::after {
    border: 1px solid rgba(245, 245, 245, 0.46);
    opacity: 0;
    transform: scaleX(0.985) scaleY(0.94);
  }

  .survey__field:focus-within .survey__control-frame::before,
  .survey__other-field:focus-within .survey__control-frame::before {
    opacity: 0;
  }

  .survey__field:focus-within .survey__control-frame::after,
  .survey__other-field:focus-within .survey__control-frame::after {
    opacity: 1;
    transform: scale(1);
  }

  .survey__control {
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: var(--control-height-input);
    padding: var(--space-16);
    border: 0;
    background-color: transparent;
    color: var(--body-text--emphasis);
    font-size: var(--text-body);
    line-height: var(--leading-body);
    letter-spacing: var(--tracking-body);
  }

  .survey__control::placeholder {
    color: var(--body-text--subtle);
  }

  .survey__control:focus-visible {
    outline: 0;
  }

  .survey-gate__note {
    color: var(--body-text--muted);
    font-size: var(--text-ui);
    line-height: var(--leading-body);
    text-wrap: pretty;
  }

  .survey-gate__button,
  .survey-form__submit {
    justify-content: space-between;
    width: 100%;
    min-height: var(--control-height-lg);
    padding: 0 var(--space-20);
    text-align: left;
  }

  .survey__button-icon {
    position: relative;
    z-index: 1;
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
  }

  .survey {
    padding-block: var(--section-padding-y-tight);
  }

  .survey__inner {
    display: grid;
    grid-template-columns: minmax(240px, 320px) minmax(0, 760px);
    justify-content: space-between;
    gap: clamp(var(--space-48), 7vw, 96px);
    align-items: start;
  }

  .survey__aside {
    position: sticky;
    top: calc(var(--nav-height) + var(--space-32));
    display: grid;
    gap: var(--space-24);
    padding-top: var(--space-4, 4px);
  }

  .survey__heading {
    font-size: var(--text-heading);
  }

  .survey__copy {
    max-width: 420px;
  }

  .survey__stats {
    display: grid;
    margin-top: var(--space-8);
    border-top: 1px solid var(--border-color);
  }

  .survey__stat {
    display: grid;
    grid-template-columns: minmax(88px, 0.38fr) minmax(0, 1fr);
    gap: var(--space-16);
    padding-block: var(--space-16);
    border-bottom: 1px solid var(--border-color);
  }

  .survey__stat dt {
    color: var(--body-text--muted);
  }

  .survey__stat dd {
    min-width: 0;
    margin: 0;
    color: var(--body-text--emphasis);
    overflow-wrap: anywhere;
  }

  .survey-form {
    display: grid;
    gap: 0;
    width: 100%;
    max-width: 760px;
    justify-self: end;
  }

  .survey__honeypot {
    position: absolute;
    left: -100vw;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .survey-question {
    display: grid;
    gap: var(--space-16);
    min-width: 0;
    padding: var(--space-32) 0;
    border-top: 1px solid rgba(245, 245, 245, 0.24);
  }

  .survey-question__legend {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: var(--space-20);
    width: 100%;
    color: var(--body-text--emphasis);
  }

  .survey-question__index {
    padding-top: 0.34em;
    color: var(--body-text--muted);
    font-variant-numeric: tabular-nums;
  }

  .survey-question__title {
    font-size: var(--text-lead);
    line-height: var(--leading-title);
    letter-spacing: var(--tracking-title);
    text-wrap: balance;
  }

  .survey-question__helper {
    max-width: 560px;
    margin-left: 68px;
    color: var(--body-text--muted);
  }

  .survey__options {
    display: grid;
    margin-left: 68px;
  }

  .survey__option {
    position: relative;
    display: block;
    min-width: 0;
    cursor: pointer;
  }

  .survey__option-input {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  .survey__option-body {
    display: grid;
    grid-template-columns: 10px minmax(0, 1fr);
    align-items: center;
    gap: var(--space-20);
    min-height: 56px;
    padding-block: var(--space-16);
    border-top: 1px dashed var(--border-color);
    color: var(--body-text);
    font-size: 17px;
    transition-property: color, border-color;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .survey__option:last-child .survey__option-body {
    border-bottom: 1px dashed var(--border-color);
  }

  .survey__option-marker {
    width: 10px;
    height: 10px;
    border: 1px solid rgba(245, 245, 245, 0.48);
    border-radius: 999px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .survey__option-body--checkbox .survey__option-marker {
    border-radius: 1px;
  }

  .survey__option:hover .survey__option-body,
  .survey__option-input:focus-visible + .survey__option-body,
  .survey__option-input:checked + .survey__option-body {
    color: var(--body-text--emphasis);
  }

  .survey__option-input:focus-visible + .survey__option-body {
    outline: 1px solid var(--primary-red);
    outline-offset: 4px;
  }

  .survey__option-input:checked + .survey__option-body .survey__option-marker {
    border-color: rgba(215, 9, 35, 0.9);
    background-color: var(--primary-red);
    box-shadow: inset 0 0 0 2px var(--primary-black);
  }

  .survey__other-field {
    margin-left: 68px;
    padding-top: var(--space-8);
  }

  .survey-form__submit {
    margin-top: var(--space-24);
  }

  .survey-form__submit:disabled {
    opacity: 0.62;
    cursor: wait;
  }

  .survey-form__submit:disabled::before {
    transform: scaleX(0);
  }

  .survey__feedback {
    min-height: calc(var(--space-16) * 2 + var(--leading-ui) * 2em);
    padding-top: var(--space-16);
  }

  .survey__status {
    display: flex;
    justify-content: space-between;
    gap: var(--space-16);
    padding-top: var(--space-12);
    color: var(--body-text--muted);
    font-family: var(--font-mono);
    font-size: var(--text-meta);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
  }

  .survey__status--error::after {
    content: "status: failed";
    color: var(--primary-red);
  }

  .survey-complete {
    display: grid;
    gap: var(--space-24);
    width: 100%;
    max-width: 720px;
    justify-self: end;
    padding-block: var(--space-40);
  }

  .survey-complete__heading {
    font-size: var(--text-heading);
  }

  .survey-complete__copy {
    max-width: 560px;
  }

  .survey-complete__button {
    justify-self: start;
    margin-top: var(--space-8);
  }

  @media (max-width: 991px) {
    .survey-landing {
      padding-block: 112px var(--section-padding-y-tight);
    }

    .survey-landing__inner,
    .survey__inner {
      width: 100%;
    }

    .survey-landing__inner {
      grid-template-columns: 1fr;
      gap: var(--space-40);
    }

    .survey-landing__heading {
      margin-bottom: var(--space-24);
    }

    .survey-landing__copy {
      font-size: var(--text-body);
    }

    .survey-gate {
      padding-block: var(--space-24);
    }

    .survey__inner {
      grid-template-columns: 1fr;
      gap: var(--space-40);
    }

    .survey__aside {
      position: static;
      gap: var(--space-20);
      padding-top: 0;
    }

    .survey__stats {
      margin-top: var(--space-8);
    }

    .survey-form {
      max-width: none;
      justify-self: stretch;
    }

    .survey-question {
      padding: var(--space-28) 0;
    }

    .survey-question__legend {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: var(--space-16);
    }

    .survey-question__helper,
    .survey__options,
    .survey__other-field {
      margin-left: 56px;
    }

    .survey__option-body {
      min-height: 60px;
      font-size: var(--text-body);
    }

    .survey-complete {
      max-width: none;
      justify-self: stretch;
      padding-block: var(--space-32);
    }

    .survey-complete__button {
      justify-self: stretch;
      width: 100%;
    }
  }
</style>
