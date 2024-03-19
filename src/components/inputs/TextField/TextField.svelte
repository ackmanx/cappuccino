<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { ChangeEvent } from '../../../types'

  export let label: string | undefined = ''
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
<label
  >{label}
  <input {name} {type} {value} on:change={onChange} />
</label>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  input {
    height: 4rem;
    border: 0.2rem solid var(--color-text);
    border-radius: 10px;
    padding: 0 1.2rem;
    width: 100%;
  }

  label {
    flex-grow: 1;
    display: block;
  }
</style>
