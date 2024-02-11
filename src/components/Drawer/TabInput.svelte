<script lang="ts">
  import type { ChangeEvent } from '../../types'
  import TextField from '../inputs/TextField/TextField.svelte'

  export let element
  export let index: number
  export let onUpdateTab: (name: ChangeEvent, index: number) => void
  console.log('LinkInput', element)
</script>

<div>
  <TextField
    value={element.title}
    onChange={(event) => onUpdateTab(event, index)}
    name="title"
    type="text"
    label="title"
  />
</div>
