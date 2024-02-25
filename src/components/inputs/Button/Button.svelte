<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  // Props
  export let className: string = ''
  export let onClick: (_) => void = () => {}
  //document.documentElement.style.cssText = '--color-accent: transparent'
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<button class={className} on:click={onClick}>
  <slot />
</button>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-button-background);
    background-color: var(--color-accent);
    border-radius: 8px;
    font-size: 1.6rem;
    border: 2px solid transparent;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: all 0.25s;
  }

  button:active {
    color: var(--color-main-background);
    background-color: var(--color-button-background);
  }

  button:hover {
    border: 2px solid var(--color-button-background);
  }
</style>
