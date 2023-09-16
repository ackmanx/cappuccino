<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  // Props
  export let label: string
  export let type: string
  export let rows: number | undefined = undefined
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    margin: 1rem 0 2rem;
  }

  .field,
  input {
    height: 4rem;
    border: 0.2rem solid var(--color-text);
    padding: 0 1.2rem;
    width: 100%;
    font-family: inherit;
    outline-offset: 0.4rem;
  }

  textarea {
    width: 100%;
    padding: 1.2rem;
    border: 0.2rem solid var(--color-accent);
    font-family: inherit;
    outline-offset: 0.4rem;
    resize: none;
  }

  label {
    margin-bottom: 0.4rem;
    display: block;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <label for={label}>
    {label}
  </label>
  <div class="field">
    {#if type === 'textarea'}
      <textarea id={label} {rows} />
    {:else}
      <input id={label} type="text" />
    {/if}
  </div>
</section>
