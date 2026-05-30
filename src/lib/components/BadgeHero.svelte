<script lang="ts">
  import { onMount } from "svelte";

  let viewer = $state<HTMLElement>();

  onMount(() => {
    void import("@google/model-viewer");

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();

      window.scrollBy({
        top: event.deltaY,
        left: event.deltaX,
        behavior: "auto",
      });
    };

    viewer?.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      viewer?.removeEventListener("wheel", handleWheel, {
        capture: true,
      });
    };
  });
</script>

<div class="badge-stage">
  <model-viewer
    bind:this={viewer}
    src="/logo-v2.glb"
    alt="OMNIWERX logo"
    camera-controls
    disable-zoom
    disable-pan
    touch-action="pan-y"
    interaction-prompt="none"
    camera-orbit="14.7deg 77deg 0.72m"
    min-camera-orbit="auto 0deg 0.72m"
    max-camera-orbit="auto 180deg 0.72m"
    field-of-view="30deg"
    min-field-of-view="20deg"
    max-field-of-view="80deg"
    environment-image="/studio_kontrast_02_2k.hdr"
    exposure="1.2"
    shadow-intensity="0.6"
    shadow-softness="0.8"
    loading="eager"
    orientation="0deg 90deg 0deg"
  ></model-viewer>
</div>

<style>
  .badge-stage {
    width: min(100%, 520px);
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: clamp(40px, 7vw, 72px) auto 0;
    overflow: hidden;
  }

  model-viewer {
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    --poster-color: transparent;
    cursor: default;
    touch-action: pan-y;
    overflow: hidden;
    scrollbar-width: none;
    transform: translateY(-3%) rotate(2deg);
  }
</style>
