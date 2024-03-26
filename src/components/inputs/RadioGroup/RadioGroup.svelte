<script lang="ts">
  export let options: { label: string; value: number }[]
  export let legend: string
  export let onchange: (event: any) => void
  export let selectedValue: number = 0
  //let websiteOptions = selectedValue
</script>

<fieldset>
  <legend>{legend}</legend>
  {#each options as option}
    <label class="radio-label">
      <input
        name="websiteOptions"
        on:change={onchange}
        bind:group={selectedValue}
        type="radio"
        checked={option.value === selectedValue}
        value={option.value}
      />
      {option.label}
    </label>
  {/each}
</fieldset>

<style>
  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }

  input[type='radio'] {
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 1.2rem;
    display: grid;
    margin: 0 0.5rem 0 0;
    place-content: center;
    border: 0.2rem solid var(--color-text);
  }

  input[type='radio']::before {
    content: '';
    border-radius: 0.6rem;
    background-color: var(--color-accent);
  }

  input[type='radio']:checked::before {
    width: 1.2rem;
    height: 1.2rem;
    animation: bounce 0.4s ease-in-out;
    z-index: 2;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .radio-label {
    display: flex;
    align-items: center;
  }

  input[type='radio']:checked {
    border: 0.2rem solid var(--color-accent);
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.5);
    }
    66% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
