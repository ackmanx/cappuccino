<script lang="ts">
  import {
    getContextByDraggableList,
    getLayerConfig,
    setContextByDraggableList,
  } from '../../context'
  import Button from '../inputs/Button/Button.svelte'

  export let key: string
  export let onSave: undefined | (() => void) = undefined
  export let onNew: undefined | (() => void) = undefined

  setContextByDraggableList(key)
  const draggableList = getContextByDraggableList(key)
  const layerConfig = getLayerConfig()

  const handleMouseOver = () => {
    $draggableList = { ...$draggableList, activeListArea: true }
  }

  const handleMouseOut = () => {
    $draggableList = { ...$draggableList, activeListArea: false }
  }

  function handleCancel() {
    $layerConfig = { ...$layerConfig, activate: false }
  }

  function handleSave() {
    if (onSave) {
      onSave()
    }

    handleCancel()
  }
</script>

<section>
  <ul
    data-test-id={`draggable-list__${key}`}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={() => {}}
    on:blur={() => {}}
  >
    <slot />
  </ul>
  {#if onNew}
    <div>
      <Button onClick={onNew}>new</Button>
    </div>
  {/if}
  {#if onSave}
    <div class="button-container">
      <Button onClick={handleSave}>save</Button>
      <Button onClick={handleCancel}>cancel</Button>
    </div>
  {/if}
</section>

<style>
  section {
    padding-bottom: 2rem;
  }

  .button-container {
    display: flex;
    font-size: 1.6rem;
    gap: 1.6rem;
    padding: 1rem 0 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
</style>
