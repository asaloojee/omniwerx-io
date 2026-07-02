<script lang="ts">
  type Props = {
    class?: string;
    section?: string;
    text: string;
  };

  let { class: className = "", section, text }: Props = $props();
</script>

<span class={`section-label ${className}`}>
  {#if section !== undefined && section !== ""}
    <span class="section-label__number">{section}</span>
    <span class="section-label__slash">/</span>
  {/if}
  <span class="section-label__text">{text}</span>
</span>
