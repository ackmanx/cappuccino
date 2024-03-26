<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  // Props
  import { getSettings } from '../../../context'

  const settings = getSettings()
  export let onClick: (_) => void = () => {}
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<button class:hide={$settings.editable} on:click={onClick}>
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
    background-color: transparent;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    border: 2px solid transparent;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: all 0.25s;
  }

  button.hide {
    display: none;
  }

  button:active {
    color: var(--color-main-background);
    background-color: var(--color-button-background);
  }

  button:hover {
    border: 2px solid var(--color-button-background);
  }
</style>
