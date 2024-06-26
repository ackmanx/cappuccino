<script lang="ts">
  import { fade } from 'svelte/transition'

  import { getLayerConfig } from '../../context'

  export let title: String

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
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<svelte:window on:keydown={onEsc} />

{#if $layerConfig.activate}
  <component
    inert={!$layerConfig.activate}
    role="dialog"
    transition:customSlide={{ duration: 250 }}
    class="drawer"
  >
    <div class="header">
      <h1>{title}</h1>
      <button on:click={onClickHandler}>&times;</button>
    </div>
    <div>
      <slot />
    </div>
  </component>

  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    role="dialog"
    transition:fade={{ duration: 250 }}
    class="overlay"
    on:click={onClickHandler}
  />
{/if}

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .drawer {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-main-background);
    height: 100vh;
    width: 400px;
    z-index: 4;
    overflow: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 1.5em;
    font-weight: normal;
  }

  .overlay {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--color-overlay);
    z-index: 3;
    opacity: 0.6;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 4rem;
    color: var(--text);
    font-weight: lighter;
  }

  component {
    padding: 1rem 2rem;
  }

  :global(body:has(.overlay)) {
    height: 100%;
    overflow: hidden;
  }
</style>
