<script lang="ts">
  import { fade } from 'svelte/transition'

  import { getLayerConfig } from '../../context'

  const layerConfig = getLayerConfig()

  const onEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      $layerConfig = { ...$layerConfig, activate: false }
    }
  }

  const onClickHandler = () => {
    $layerConfig = { ...$layerConfig, activate: false }
  }

  function customSlide(node: Element, { duration = 250 }) {
    return {
      duration,
      css: (t: number) => {
        return `
           transform: translateX(${360 + t * -360}px);
        `
      },
    }
  }

  function init(node: HTMLElement) {
    node.focus()
  }
</script>

<svelte:window on:keydown={onEsc} />

{#if $layerConfig.activate}
  <component
    inert={!$layerConfig.activate}
    role="dialog"
    transition:customSlide={{ duration: 250 }}
    class="drawer"
  >
    <div class="button-container"><button use:init on:click={onClickHandler}>&times;</button></div>
    <div>
      <slot />
    </div>
  </component>
  <div
    role="dialog"
    transition:fade={{ duration: 250 }}
    class="overlay"
    on:click={onClickHandler}
  />
{/if}

<style>
  .drawer {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-main-background);
    height: 100vh;
    width: 360px;
    z-index: 4;
    overflow: auto;
  }

  .button-container {
    display: flex;
    justify-content: end;
  }

  .overlay {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--color-text);
    z-index: 3;
    opacity: 0.6;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 4rem;
    width: 6rem;
    padding: 0 1rem;
    color: var(--text);
  }

  component {
    padding: 1rem;
  }

  :global(body:has(.overlay)) {
    height: 100%;
    overflow: hidden;
  }
</style>
