<script lang="ts">
    import {fade} from "svelte/transition"
    import {getLayerConfig} from "../../context";

    const layerConfig = getLayerConfig()

    const onEsc = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
            $layerConfig = {...$layerConfig, activate: false}
        }
    }

    const onClickHandler = () => {
        $layerConfig = {...$layerConfig, activate: false}
    }

    function customSlide(node: Element, {duration = 250}) {
        return {
            duration,
            css: (t: number) => {
                return `
           transform: translateX(${-360 + t * 360}px);
        `
            },
        }
    }

    function init(node: HTMLElement) {
        node.focus()
    }
</script>

<svelte:window on:keydown={onEsc}/>
{#if $layerConfig.activate}
  <div
    inert={!$layerConfig.activate}
    role="dialog"
    transition:customSlide={{ duration: 250 }}
    class="drawer"
  >
    <button use:init on:click={onClickHandler}>&times;</button>
    <div class="dialog-inner">
      <slot/>
    </div>
  </div>
  <div transition:fade={{ duration: 250 }} class="overlay" />
{/if}
<style>
    .drawer {
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--color-main-background);
        height: 100vh;
        width: 360px;
        z-index: 4;
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
        position: absolute;
        right: 0;
        width: 6rem;
        padding: 0 1rem;
        color: var(--text);
    }

    :global(body:has(.overlay)) {
        height: 100%;
        overflow: hidden;
    }
</style>
