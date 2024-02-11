<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { ChangeEvent } from '../../../types'

  export let label: string
  export let value: string | undefined
  export let onChange: (event: ChangeEvent) => void
  export let name: string
  export let type: 'text' | 'number'
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <label
    >{label}
    <input {name} {type} {value} on:change={onChange} />
  </label>
</section>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    margin: 1rem 0 2rem;
  }

  input {
    height: 4rem;
    border: 0.2rem solid var(--color-text);
    border-radius: 10px;
    padding: 0 1.2rem;
    width: 100%;
  }

  label {
    margin-bottom: 0.4rem;
    display: block;
  }
</style>
