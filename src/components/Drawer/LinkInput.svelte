<script lang="ts">
  import type { ChangeEvent } from '../../types'
  import TextField from '../inputs/TextField/TextField.svelte'

  export let element
  export let index: number
  export let shouldTakeFocus: boolean
  export let onUpdateLink: (name: ChangeEvent, index: number) => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<div>
  <TextField
    value={element.label}
    onChange={(event) => onUpdateLink(event, index)}
    name="label"
    label="label"
    {shouldTakeFocus}
  />
</div>
<div>
  <TextField
    value={element.url}
    onChange={(event) => onUpdateLink(event, index)}
    name="url"
    label="url"
  />
</div>
