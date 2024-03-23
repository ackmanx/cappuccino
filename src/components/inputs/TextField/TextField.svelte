<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { ChangeEvent } from '../../../types'

  export let label: string | undefined = ''
  export let value: string | undefined = ''
  export let name: string | undefined = ''
  export let placeholder: string | undefined = ''
  export let isPlaceholderInput: boolean | undefined
  export let shouldTakeFocus: boolean | undefined
  export let onChange: (event: ChangeEvent) => void | undefined = () => {}
  export let onInput: (event: InputEvent) => void | undefined = () => {}

  function shouldSetFocus(node: HTMLElement) {
    if (shouldTakeFocus) {
      node.focus()
    }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<label class:isPlaceholderInput
  >{label}
  <input
    class:isPlaceholderInput
    {name}
    {value}
    {placeholder}
    type="text"
    on:change={onChange}
    on:input={onInput}
    use:shouldSetFocus
  />
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

  label.isPlaceholderInput {
    display: flex;
    justify-content: right;
  }

  input.isPlaceholderInput {
    width: calc(100% - 60px - 19px);
    margin-right: 21px;
    margin-top: 1rem;
  }
</style>
