<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import Button from '../inputs/Button/Button.svelte'
  import TextField from '../inputs/TextField/TextField.svelte'

  export let onClose: () => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <h1>Edit Tabs</h1>

  <TextField name="wee" type="text" label="Something" value="hello world" onChange={() => {}} />

  <Button onClick={onClose}>
    <span class="material-symbols-outlined"> close </span>
  </Button>
</section>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
