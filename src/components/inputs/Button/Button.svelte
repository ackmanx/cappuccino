<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary'
  export let onClick: (_) => void = () => {}
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<button
  class:primary={variant === 'primary'}
  class:secondary={variant === 'secondary'}
  on:click={onClick}
>
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
    border-radius: 8px;
    font-size: 1.6rem;
    border: 2px solid transparent;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: all 0.25s;
  }

  button.primary {
    color: var(--color-button-primary-text);
    background-color: var(--color-accent);
  }

  button.secondary {
    color: var(--color-button-background);
    background-color: transparent;
  }

  button:active {
    color: var(--color-main-background);
    background-color: var(--color-button-background);
  }

  button:hover {
    border: 2px solid var(--color-button-background);
  }
</style>
