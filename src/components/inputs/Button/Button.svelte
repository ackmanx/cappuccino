<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  // Props
  export let className: string = ''
  export let onClick: (_) => void = () => {}
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  button {
    color: var(--color-button-background);
    background-color: var(--color-main-background);
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.2em 0.5em 0 0.5em;
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

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<button class={className} on:click={onClick}>
  <slot />
</button>
