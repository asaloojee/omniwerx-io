<script lang="ts">
  import { tick } from "svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import SiteNav from "$lib/components/SiteNav.svelte";

  type Option = {
    value: string;
    label: string;
  };

  const clientVolumeOptions: Option[] = [
    { value: "placeholder-a", label: "Placeholder option A" },
    { value: "placeholder-b", label: "Placeholder option B" },
    { value: "placeholder-c", label: "Placeholder option C" },
    { value: "placeholder-d", label: "Placeholder option D" },
  ];

  const workflowAreaOptions: Option[] = [
    { value: "placeholder-a", label: "Placeholder multi-select A" },
    { value: "placeholder-b", label: "Placeholder multi-select B" },
    { value: "placeholder-c", label: "Placeholder multi-select C" },
    { value: "placeholder-d", label: "Placeholder multi-select D" },
    { value: "placeholder-e", label: "Placeholder multi-select E" },
  ];

  const frictionOptions: Option[] = [
    { value: "placeholder-a", label: "Placeholder radio option A" },
    { value: "placeholder-b", label: "Placeholder radio option B" },
    { value: "placeholder-c", label: "Placeholder radio option C" },
  ];

  let email = $state("");
  let surveyStarted = $state(false);
  let submitted = $state(false);
  let clientVolume = $state("");
  let workflowAreas = $state<string[]>([]);
  let shortAnswer = $state("");
  let friction = $state("");
  let otherFriction = $state("");
  let mediumAnswer = $state("");

  const beginSurvey = async (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) return;

    surveyStarted = true;
    submitted = false;

    await tick();
    document.getElementById("survey-form-heading")?.focus();
  };

  const submitSurvey = async (event: SubmitEvent) => {
    event.preventDefault();
    submitted = true;

    await tick();
    document.getElementById("survey-complete")?.focus();
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
    <section class="survey-landing" aria-labelledby="survey-landing-heading">
      <div class="survey-landing__inner">
        <div class="survey-landing__content">
          <p class="survey__label">[00 / coach workflow survey]</p>
          <h1 class="survey-landing__heading" id="survey-landing-heading">
            A short workflow survey for coaches.
          </h1>
          <p class="survey-landing__copy">
            I’m researching how coaches manage leads, clients, follow-ups,
            check-ins, and the manual work between. Add your email to begin the
            placeholder survey.
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
            Used only to connect your responses and follow up if useful. The
            full survey appears after this step.
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
    <section class="section survey" aria-labelledby="survey-form-heading">
      <div class="survey__inner">
        <aside class="survey__aside" aria-label="Survey progress">
          <p class="survey__label">[01 / active survey]</p>
          <h1 class="survey__heading" id="survey-form-heading" tabindex="-1">
            Coach workflow research.
          </h1>
          <p class="survey__copy">
            Placeholder questions are installed for layout, interaction states,
            and mobile flow. Final wording can drop into the same structure.
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
            <h2 class="survey-complete__heading">Survey placeholder sent.</h2>
            <p class="survey-complete__copy">
              This confirms the success state and page flow. Once the real
              questions are provided, this can connect to the final submission
              handler.
            </p>
            <a class="button survey-complete__button" href="/">
              <span>Return home</span>
            </a>
          </div>
        {:else}
          <form class="survey-form" onsubmit={submitSurvey}>
            <input type="hidden" name="email" value={email} />

            <fieldset class="survey-question">
              <legend class="survey-question__legend">
                <span class="survey-question__index">[01]</span>
                <span class="survey-question__title">
                  Placeholder single-select question?
                </span>
              </legend>
              <p class="survey-question__helper">
                Radio format. Select the answer that fits best.
              </p>
              <div class="survey__options">
                {#each clientVolumeOptions as option}
                  <label class="survey__option">
                    <input
                      class="survey__option-input"
                      type="radio"
                      name="client-volume"
                      value={option.value}
                      bind:group={clientVolume}
                      required
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}
              </div>
            </fieldset>

            <fieldset class="survey-question">
              <legend class="survey-question__legend">
                <span class="survey-question__index">[02]</span>
                <span class="survey-question__title">
                  Placeholder multi-select question?
                </span>
              </legend>
              <p class="survey-question__helper">
                Checkbox format. Choose every option that applies.
              </p>
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
                    <span class="survey__option-body survey__option-body--checkbox">
                      <span class="survey__option-marker" aria-hidden="true"></span>
                      <span>{option.label}</span>
                    </span>
                  </label>
                {/each}
              </div>
            </fieldset>

            <label class="survey-question survey-question--label">
              <span class="survey-question__legend">
                <span class="survey-question__index">[03]</span>
                <span class="survey-question__title">
                  Placeholder short-answer question?
                </span>
              </span>
              <span class="survey-question__helper">
                Short answer format. Keep this to one sentence.
              </span>
              <span class="survey__control-frame">
                <input
                  class="survey__control"
                  type="text"
                  name="short-answer"
                  placeholder="Brief response"
                  bind:value={shortAnswer}
                  maxlength="180"
                />
              </span>
            </label>

            <fieldset class="survey-question">
              <legend class="survey-question__legend">
                <span class="survey-question__index">[04]</span>
                <span class="survey-question__title">
                  Placeholder radio question with an other option?
                </span>
              </legend>
              <p class="survey-question__helper">
                Radio plus conditional short answer.
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
                    />
                    <span class="survey__option-body">
                      <span class="survey__option-marker" aria-hidden="true"></span>
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
                  />
                  <span class="survey__option-body">
                    <span class="survey__option-marker" aria-hidden="true"></span>
                    <span>Other</span>
                  </span>
                </label>
              </div>

              {#if friction === "other"}
                <label class="survey__other-field">
                  <span class="survey__field-label">Other response</span>
                  <span class="survey__control-frame">
                    <input
                      class="survey__control"
                      type="text"
                      name="friction-other"
                      placeholder="Add another option"
                      bind:value={otherFriction}
                      maxlength="180"
                    />
                  </span>
                </label>
              {/if}
            </fieldset>

            <label class="survey-question survey-question--label">
              <span class="survey-question__legend">
                <span class="survey-question__index">[05]</span>
                <span class="survey-question__title">
                  Placeholder medium-length answer question?
                </span>
              </span>
              <span class="survey-question__helper">
                Medium answer format. This is where the richest workflow detail
                can live.
              </span>
              <span class="survey__control-frame">
                <textarea
                  class="survey__control survey__textarea"
                  name="medium-answer"
                  rows="6"
                  placeholder="Walk through the current process..."
                  bind:value={mediumAnswer}
                  maxlength="1600"
                ></textarea>
              </span>
            </label>

            <button class="button button--wide survey-form__submit" type="submit">
              <span>Submit survey</span>
              <img
                class="survey__button-icon"
                src="/arrow-right.svg"
                alt=""
                aria-hidden="true"
              />
            </button>
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
    padding-block: clamp(120px, 14vw, 180px) var(--section-padding-y-tight);
  }

  @supports (height: 100dvh) {
    .survey-landing {
      min-block-size: calc(100dvh - var(--nav-height));
    }
  }

  .survey-landing__inner,
  .survey__inner {
    width: min(calc(100% - var(--site-gutter) - var(--site-gutter)), var(--container-wide));
    margin-inline: auto;
  }

  .survey-landing__inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(420px, 0.52fr);
    gap: clamp(var(--space-48), 7vw, 112px);
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
    position: relative;
    display: grid;
    gap: var(--space-20);
    padding: var(--space-32);
    overflow: hidden;
    border: 1px solid rgba(245, 245, 245, 0.14);
    background-color: var(--surface-muted);
    isolation: isolate;
  }

  .survey-gate::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      315deg,
      rgba(245, 245, 245, 0.055) 0 1px,
      transparent 1px 10px
    );
    mask-image: linear-gradient(135deg, transparent 0%, black 42%, black 100%);
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
    padding-bottom: var(--space-20);
    border-bottom: 1px dashed var(--border-color);
    color: var(--body-text--muted);
  }

  .survey__field {
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
  .survey-question--label:focus-within .survey__control-frame::before,
  .survey__other-field:focus-within .survey__control-frame::before {
    opacity: 0;
  }

  .survey__field:focus-within .survey__control-frame::after,
  .survey-question--label:focus-within .survey__control-frame::after,
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
    padding-block-start: var(--section-padding-y-tight);
  }

  .survey__inner {
    display: grid;
    grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
    gap: clamp(var(--space-48), 7vw, 112px);
    align-items: start;
  }

  .survey__aside {
    position: sticky;
    top: calc(var(--nav-height) + var(--space-32));
    display: grid;
    gap: var(--space-24);
  }

  .survey__heading {
    font-size: var(--text-heading);
  }

  .survey__copy {
    max-width: 420px;
  }

  .survey__stats {
    display: grid;
    margin-top: var(--space-16);
    border-top: 1px dashed var(--border-color);
  }

  .survey__stat {
    display: grid;
    grid-template-columns: minmax(96px, 0.42fr) minmax(0, 1fr);
    gap: var(--space-16);
    padding-block: var(--space-16);
    border-bottom: 1px dashed var(--border-color);
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
    gap: var(--space-24);
    width: 100%;
    max-width: 760px;
    justify-self: end;
  }

  .survey-question {
    display: grid;
    gap: var(--space-16);
    min-width: 0;
    padding: var(--space-28) 0 var(--space-32);
    border: 0;
    border-top: 1px solid var(--border-color);
  }

  .survey-question:first-of-type {
    border-top-color: rgba(245, 245, 245, 0.28);
  }

  .survey-question__legend {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: var(--space-20);
    width: 100%;
    color: var(--body-text--emphasis);
  }

  .survey-question--label .survey-question__legend {
    display: grid;
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
    margin-left: 76px;
    color: var(--body-text--muted);
  }

  .survey__options {
    display: grid;
    margin-left: 76px;
  }

  .survey__options--grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .survey__option {
    position: relative;
    display: block;
    min-width: 0;
    cursor: pointer;
  }

  .survey__option + .survey__option,
  .survey__options--grid .survey__option:nth-child(n + 3) {
    margin-top: -1px;
  }

  .survey__options--grid .survey__option:nth-child(even) {
    margin-left: -1px;
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
    position: relative;
    display: grid;
    grid-template-columns: 8px minmax(0, 1fr);
    align-items: center;
    gap: var(--space-16);
    min-height: var(--control-height-input);
    padding: var(--space-12) var(--space-16);
    border: 1px dashed var(--border-color);
    color: var(--body-text);
    transition-property: background-color, border-color, color;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .survey__option-marker {
    width: 8px;
    height: 8px;
    border: 1px solid rgba(245, 245, 245, 0.42);
    border-radius: 999px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: var(--duration-fast);
    transition-timing-function: var(--bezier);
  }

  .survey__option-body--checkbox .survey__option-marker {
    border-radius: 1px;
  }

  .survey__option:hover .survey__option-body,
  .survey__option-input:focus-visible + .survey__option-body {
    color: var(--body-text--emphasis);
    background-color: rgba(245, 245, 245, 0.04);
  }

  .survey__option-input:focus-visible + .survey__option-body {
    outline: 1px solid var(--primary-red);
    outline-offset: -1px;
  }

  .survey__option-input:checked + .survey__option-body {
    z-index: 1;
    border-style: solid;
    border-color: rgba(245, 245, 245, 0.46);
    color: var(--body-text--emphasis);
    background-color: rgba(245, 245, 245, 0.04);
  }

  .survey__option-input:checked + .survey__option-body .survey__option-marker {
    border-color: rgba(215, 9, 35, 0.9);
    background-color: var(--primary-red);
    box-shadow: inset 0 0 0 2px var(--primary-black);
  }

  .survey-question--label .survey__control-frame {
    margin-left: 76px;
  }

  .survey__textarea {
    min-height: 180px;
    resize: vertical;
  }

  .survey__other-field {
    display: grid;
    gap: var(--space-12);
    margin-left: 76px;
    padding-top: var(--space-8);
  }

  .survey-form__submit {
    margin-top: var(--space-8);
  }

  .survey-complete {
    display: grid;
    gap: var(--space-24);
    width: 100%;
    max-width: 720px;
    justify-self: end;
    padding: var(--space-40);
    border: 1px solid rgba(245, 245, 245, 0.14);
    background-color: var(--surface-muted);
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
      width: min(calc(100% - var(--site-gutter) - var(--site-gutter)), var(--container-wide));
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
      padding: var(--space-20);
    }

    .survey__inner {
      grid-template-columns: 1fr;
      gap: var(--space-40);
    }

    .survey__aside {
      position: static;
      gap: var(--space-20);
    }

    .survey__stats {
      margin-top: var(--space-8);
    }

    .survey-form {
      max-width: none;
      justify-self: stretch;
      gap: var(--space-20);
    }

    .survey-question {
      padding: var(--space-24) 0 var(--space-28);
    }

    .survey-question__legend {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: var(--space-16);
    }

    .survey-question__helper,
    .survey__options,
    .survey-question--label .survey__control-frame,
    .survey__other-field {
      margin-left: 56px;
    }

    .survey__options--grid {
      grid-template-columns: 1fr;
    }

    .survey__options--grid .survey__option:nth-child(even) {
      margin-left: 0;
    }

    .survey__options--grid .survey__option:nth-child(n + 2) {
      margin-top: -1px;
    }

    .survey__option-body {
      min-height: 56px;
    }

    .survey__textarea {
      min-height: 160px;
    }

    .survey-complete {
      max-width: none;
      justify-self: stretch;
      padding: var(--space-24) var(--space-20);
    }

    .survey-complete__button {
      justify-self: stretch;
      width: 100%;
    }
  }
</style>
