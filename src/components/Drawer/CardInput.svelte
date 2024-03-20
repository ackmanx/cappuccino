<script lang="ts">
  import type { ChangeEvent } from '../../types'
  import TextField from '../inputs/TextField/TextField.svelte'

  export let index: number
  export let element
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
    type="text"
    label="title"
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
