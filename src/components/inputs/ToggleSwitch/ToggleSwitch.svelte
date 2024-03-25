<script lang="ts">
  export let label: string = ''
  export let value: boolean = false
  let toggled = value
  export let onchange: (value: boolean) => void

  function onToggle() {
    toggled = !toggled
    onchange(toggled)
  }
</script>

<button class:toggled type="button" on:click={onToggle} aria-pressed={toggled}>
  <span class="switch">
    <span class="slider" />
  </span><span class="label">{label}</span>
</button>

<style>
  button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: inherit;
  }

  .label {
    padding-left: 0.5rem;
    color: var(--text);
  }

  .slider {
    display: block;
    border-radius: 1.5rem;
    height: 2rem;
    width: 2rem;
    background-color: var(--color-button-background);
    transition: transform 0.5s;
  }

  .switch {
    display: block;
    border: 0.1rem solid var(--color-text);
    background-color: var(--color-card-background);
    width: 5rem;
    padding: 0.4rem;
    height: 3rem;
    border-radius: 2rem;
    transition: background-color 0.5s;
  }

  .toggled .switch {
    background-color: var(--color-accent);
  }

  .toggled .slider {
    transform: translateX(20px);
  }
</style>
