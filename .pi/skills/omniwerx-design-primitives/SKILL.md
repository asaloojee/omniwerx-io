---
name: omniwerx-design-primitives
description: Use when designing, reviewing, or extending omniwerx interfaces. Applies a deterministic layer of design judgment for a structured, technical, refined, and tool-like visual language without prescribing exact implementation details.
---

# omniwerx Design Primitives

## Core intention

Design for omniwerx should live at the intersection of **uniqueness and timelessness**. The work should not reach for the most commonly available solution simply because it is familiar, trendy, or easy to implement. It should choose the principle that best clarifies the information, then express that principle through the site's existing language.

The site should feel like a precise technical document, a calibrated instrument, and a marked workshop artifact: **machined, stamped, registered, inspected, and quietly polished**. It should not feel embellished. It should feel equipped.

A section, component, or page should not gain detail because it looks more interesting. It should gain a primitive because that primitive helps organize information, clarify a decision, confirm state, provide evidence, or make the work more inspectable.

When extending the site, prefer primitives that behave like records, ledgers, work orders, inspection marks, receipts, annotations, procedures, constraints, and artifacts. Avoid primitives that only add atmosphere.

Keep code clean and legible and adhere to framework best practices. Don't introduce complexity unnecessarily.

## How this skill should influence design

This skill should add determinism around **which principle to apply**, not around which exact component, class, or layout must be used.

Do not treat the primitive names as mandatory components. Treat them as design instruments. Choose the instrument whose purpose matches the communication problem, then implement it in a way that fits the surrounding page.

The desired pattern is:

1. Identify the communication job.
2. Choose the principle that best serves that job.
3. Express it using the site's existing language of indices, mono metadata, registers, rails, controlled surfaces, scarce red signal, and precise spacing.
4. Remove anything that does not improve legibility, comparison, state, evidence, sequence, or action.

## Evaluation questions

Before adding a visual or structural idea, ask:

- What job does this primitive perform?
- Does it clarify sequence, grouping, comparison, state, evidence, constraint, or action?
- Would this still feel refined if the current visual trends changed?
- Does it strengthen the site's language of indices, registers, rails, controlled surfaces, artifacts, and precise metadata?
- Is this the principled choice, or merely the easiest/commonest web pattern?
- Could the same idea be reused elsewhere without feeling like a gimmick?

If the answer is unclear, reduce the idea until its function is obvious.

## Quick reference

| Need                                | Reach for the principle behind |
| ----------------------------------- | ------------------------------ |
| Establish page structure            | Section Ledger                 |
| Compare structured items            | Register Row                   |
| Present an offer, package, or scope | Work Order                     |
| Show sequential progress            | Procedure Rail                 |
| Add quiet contextual guidance       | Annotation Rail                |
| Communicate form or system state    | Status Strip                   |
| Ask survey or intake questions      | Question Block                 |
| Present selectable choices          | Option Register                |
| Confirm a completed action          | Completion Receipt             |
| Explain reasoning                   | Decision Record                |
| Name a boundary or limitation       | Constraint Note                |
| Present a meaningful visual object  | Artifact Stage                 |

## Primitive selection principles

Prefer the primitive that makes the information more inspectable.

- Prefer a **Register Row** before a decorative card grid.
- Prefer a **Work Order** before a generic pricing card.
- Prefer a **Procedure Rail** before vague process copy.
- Prefer an **Annotation Rail** before an ornamental tooltip or aside.
- Prefer a **Status Strip** before hiding state inside copy.
- Prefer a **Question Block** before a generic form section.
- Prefer an **Option Register** before a grid of selectable cards.
- Prefer a **Completion Receipt** before a generic success message.
- Prefer a **Decision Record** before a decorative case-study section.
- Prefer a **Constraint Note** before pretending every choice was unconstrained.
- Prefer an **Artifact Stage** before adding an abstract graphic.

These are not rigid implementation rules. They are defaults for judgment.

## Page composition guidance

A strong omniwerx page usually alternates between orientation, explanation, structure, and proof.

A useful composition pattern:

1. Orient the reader with a section or page ledger.
2. State the thesis plainly.
3. Use a structured primitive to make the content inspectable.
4. Add annotations, status, constraints, evidence, or artifacts only where they clarify the work.
5. End actions with a clear handoff or receipt.

Avoid building pages as a stack of visually unrelated sections. Each section should feel like another tool pulled from the same organized box.

## Recommended primitive set

### 1. Section Ledger

**Use when:** establishing page structure, section hierarchy, document location, or a step in a longer sequence.

**Purpose:** orient the reader and make the page feel intentionally sequenced rather than casually divided into blocks.

**Principle:** every major section should know where it sits in the document and why it exists.

**Belongs in:** major homepage sections, survey steps, legal chapters, service pages, case studies, documentation-like pages.

**Avoid when:** the content is too small to need orientation, or when the marker would become decorative metadata without a structural role.

### 2. Register Row

**Use when:** comparing or listing structured information that benefits from scanning across repeated rows.

**Purpose:** organize capabilities, services, tools, scope items, constraints, FAQs, survey answers, or evidence without defaulting to cards.

**Principle:** structure can be ornament when it clarifies comparison.

**Belongs in:** service lists, capability indexes, tool comparisons, survey summaries, audit findings, FAQs, case study records.

**Avoid when:** the item is meant to be experienced as a standalone object or when a row structure would hide important narrative context.

### 3. Work Order

**Use when:** describing an engagement, offer, package, deliverable, or project scope.

**Purpose:** make commercial information feel formal, useful, and clearly bounded.

**Principle:** an offer should feel like a scope document, not a pricing-table template.

**Belongs in:** audits, scoped projects, retainers, proposal previews, future service detail pages, productized consulting pages.

**Avoid when:** the content is purely educational or when presenting it as an offer would make the page feel too transactional.

### 4. Procedure Rail

**Use when:** communicating sequence, progression, or repeatable execution.

**Purpose:** make a process feel calm, legible, and controlled.

**Principle:** complexity becomes trustworthy when the reader can see the order of operations.

**Belongs in:** project workflow, onboarding, survey progression, case study timelines, handoff steps, implementation plans.

**Avoid when:** the order is not meaningful or when the content is better understood as a comparison rather than a sequence.

### 5. Annotation Rail

**Use when:** content needs quiet supporting context without interrupting the main reading flow.

**Purpose:** add caveats, helper text, definitions, plain-English explanations, survey guidance, or rationale while preserving the primary line of reading.

**Principle:** secondary context should feel like a useful margin note, not a competing section.

**Belongs in:** surveys, forms, service explanations, case studies, legal pages, decision records, audit reports.

**Avoid when:** the note is essential enough to belong in the main content, or when the aside adds personality without utility.

### 6. Status Strip

**Use when:** communicating state clearly.

**Purpose:** show ready, active, saving, sent, failed, selected, required, unavailable, or complete states without hiding them in prose.

**Principle:** state should be explicit, inspectable, and operational.

**Belongs in:** forms, survey progress, submission feedback, availability, project status, future dashboard or client-facing surfaces.

**Avoid when:** there is no meaningful state to communicate, or when the strip repeats information already obvious from the interaction.

### 7. Question Block

**Use when:** asking for input in a survey, intake, diagnostic, or discovery flow.

**Purpose:** present one question, its context, the required input, and any validation or status in a structured way.

**Principle:** a form should feel like a disciplined intake document, not a generic questionnaire.

**Belongs in:** survey pages, onboarding forms, discovery flows, diagnostic audits, lead qualification, research pages.

**Avoid when:** multiple small inputs are better understood together as a single register or when the question does not need its own focus.

### 8. Option Register

**Use when:** presenting radio groups, checkboxes, filters, or selectable choices.

**Purpose:** make choices feel like entries in a register rather than decorative option cards.

**Principle:** selection is a state applied to structured information.

**Belongs in:** survey answers, service selection, configurators, filters, intake forms, preference capture.

**Avoid when:** a choice needs rich visual preview, substantial explanation, or comparison that cannot fit in a row-like structure.

### 9. Completion Receipt

**Use when:** a user submits something or finishes a flow.

**Purpose:** confirm what happened, summarize the relevant context, and explain the next step.

**Principle:** completion should feel like a clean handoff, not a throwaway success message.

**Belongs in:** contact forms, surveys, bookings, audits, downloads, future client actions.

**Avoid when:** no meaningful confirmation or next step exists beyond a small inline status.

### 10. Decision Record

**Use when:** making judgment visible.

**Purpose:** explain what was chosen, why it was chosen, and what tradeoff came with it.

**Principle:** taste becomes credible when the reasoning is visible.

**Belongs in:** case studies, build notes, process pages, product thinking, audit reports, technical writeups.

**Avoid when:** the decision is too minor to deserve explanation or when exposing the rationale would distract from the primary task.

### 11. Constraint Note

**Use when:** naming the boundary that shaped a decision.

**Purpose:** make constraints visible: budget, timeline, existing systems, operational capacity, content quality, maintenance burden, user behavior, or technical risk.

**Principle:** grounded constraints make the work feel honest, specific, and trustworthy.

**Belongs in:** case studies, service descriptions, audit reports, surveys, product pages, implementation notes.

**Avoid when:** the constraint is obvious, irrelevant, or would read like an excuse rather than a useful boundary.

### 12. Artifact Stage

**Use when:** presenting a meaningful visual object.

**Purpose:** give an object room to carry information, identity, proof, or texture without becoming decorative filler.

**Principle:** visuals should feel like inspected artifacts: marks, models, screenshots, diagrams, documents, prototypes, proof objects, or before/after surfaces.

**Belongs in:** the omniwerx mark, case study evidence, screenshots, diagrams, document previews, product prototypes, audit examples.

**Avoid when:** the visual object does not carry information or identity, or when it exists only to make the page feel less empty.

## Supporting primitives

These are secondary tools that can strengthen the system when needed.

### Evidence Line

Use an evidence line to support a claim with concrete proof. It can pair a claim with an observable change, result, artifact, or decision.

Reach for it when a statement risks sounding like marketing without proof.

### Measurement Pair

Use a measurement pair to show before/after, current/target, expected/actual, or manual/automated comparisons.

It should favor honest, specific comparison over inflated marketing numbers.

### Diagnostic Finding

Use a diagnostic finding to present a problem, cause, severity, and recommendation.

It is useful for audit deliverables, case studies, service pages, and any future diagnostic product.

### Tool Tag

Use tool tags to classify information without turning labels into decoration.

Tags should describe operational categories, not vibes. They should help the reader scan and sort the content.

### Inspection Frame

Use an inspection frame when content needs to feel reviewed, contained, or handled with care.

It is useful for forms, screenshots, artifacts, embeds, reports, and important summaries. It should create focus through containment and proportion, not through heavy ornament.

### Plain-English Legal Block

Use a plain-English legal block to make policy, privacy, terms, consent, and data-use explanations feel part of the same design system.

It should help users understand what a formal statement means without replacing necessary legal language.

## Survey and intake guidance

Survey and intake pages should feel like structured research instruments.

Prioritize:

- Question Block for focused prompts.
- Option Register for selectable answers.
- Procedure Rail for step awareness.
- Status Strip for progress, validation, and submission state.
- Annotation Rail for guidance and definitions.
- Completion Receipt for the final handoff.

The survey should not feel like a loose marketing form. It should feel like a precise intake sequence: clear, respectful, bounded, and easy to complete.

## Anti-direction

Avoid adding primitives that push the site toward generic premium web tropes:

- decorative bento cards with no structural purpose
- atmospheric gradients or glow effects used as filler
- icon rows that merely decorate claims
- oversized testimonial cards without evidence or context
- novelty motion that does not clarify state or interaction
- faux dashboards or fake metrics
- visual noise that does not support reading, grouping, or action
- components chosen because they are common rather than because they are correct

Do not make the site derivative by reaching for the nearest familiar pattern. The goal is not novelty for its own sake; it is a principled specificity that can still feel refined in one, five, or ten years.

## Working principle

When in doubt, choose the primitive that makes the information more inspectable.

The best omniwerx design additions should feel like instruments in a disciplined system: useful first, distinctive because of how consistently they are used, and timeless because their purpose is clear.

The site should not feel embellished. It should feel equipped.
