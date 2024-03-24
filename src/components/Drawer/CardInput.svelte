<script lang="ts">
  import type { ChangeEvent } from '../../types'
  import TextField from '../inputs/TextField/TextField.svelte'

  export let index: number
  export let element
  export let shouldTakeFocus: boolean
  export let onUpdateCard: (event: ChangeEvent, index: number) => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->

<div>
  <TextField
    value={element.title}
    onChange={(event) => onUpdateCard(event, index)}
    name="title"
    {shouldTakeFocus}
  />
</div>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  div {
    flex-grow: 1;
  }
</style>
