<script lang="ts">
  type Props = {
    class?: string;
    text: string;
  };

  let { class: className = "", text }: Props = $props();
</script>

<div class={`completion-receipt ${className}`} role="status">
  <span class="completion-receipt__signal" aria-hidden="true"></span>
  <span>{text}</span>
</div>

<style>
  .completion-receipt {
    display: inline-flex;
    align-items: center;
    gap: var(--space-8);
    color: var(--body-text--emphasis);
    font-family: var(--font-mono);
    font-size: var(--text-meta);
    line-height: var(--leading-ui);
    letter-spacing: var(--tracking-meta);
    text-transform: lowercase;
    font-variant-numeric: tabular-nums;
  }

  .completion-receipt__signal {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 1px;
    background-color: currentColor;
  }
</style>
