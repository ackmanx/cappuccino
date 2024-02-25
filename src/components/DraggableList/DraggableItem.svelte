<script lang="ts">
  import { getContextByDraggableList } from '../../context'
  import DragIcon from '../../svgs/DragIcon.svelte'
  import RemoveIcon from '../../svgs/RemoveIcon.svelte'
  import Button from '../inputs/Button/Button.svelte'

  export let key: string
  export let dataArray: T[]
  export let index: number
  export let onArrayUpdate: (array: T[]) => void
  export let isDragEnabled: boolean

  const draggableList = getContextByDraggableList(key)
  console.log('draggableList', key, $draggableList)
  function handleDragStart(event: DragEvent) {
    if (event) {
      const currentTarget = event.currentTarget as HTMLButtonElement
      console.log('dragStart', currentTarget.dataset.index)
      if (typeof currentTarget.dataset.index !== 'undefined') {
        $draggableList = { ...$draggableList, grabbed: parseInt(currentTarget.dataset.index) }
      }
    }
  }

  const enableDropping = (event: DragEvent) => {
    if ($draggableList.activeListArea) {
      event.preventDefault()
    }
  }

  function handleDragEnter(event: DragEvent) {
    console.log('isDragEnabled', isDragEnabled)
    if ($draggableList.activeListArea) {
      const currentTarget = event.currentTarget as HTMLButtonElement
      const index = currentTarget.dataset.index
      console.log('keys', key, $draggableList.key)
      if (typeof index !== 'undefined' && key === $draggableList.key) {
        $draggableList = { ...$draggableList, draggedOver: parseInt(index) }
      }
    }
  }

  function handleDragEnd(event: DragEvent) {
    console.log('dragEnd', event.currentTarget)
    $draggableList = { ...$draggableList, draggedOver: -1 }
  }

  function handleDrop(event: DragEvent) {
    console.log('onDrop', event.currentTarget)
    const currentTarget = event.currentTarget as HTMLButtonElement
    const index = currentTarget.dataset.index
    console.log('index', index)
    if (typeof index !== 'undefined') {
      const dataToChange = [...dataArray]
      const dataToMove = dataToChange.splice($draggableList.grabbed, 1)
      dataToChange.splice(parseInt(index), 0, dataToMove[0])
      onArrayUpdate(dataToChange)
      $draggableList = { ...$draggableList, draggedOver: -1 }
    }
  }

  function handleDelete(linkIndex: number) {
    const updatedArray = [...dataArray.slice(0, linkIndex), ...dataArray.slice(linkIndex + 1)]
    onArrayUpdate(updatedArray)
  }
</script>

<li
  class="list-item"
  class:dragged-list-item={$draggableList?.draggedOver === index}
  on:dragover={enableDropping}
  data-index={index}
  draggable={isDragEnabled}
  on:dragstart={handleDragStart}
  on:drop={handleDrop}
  on:dragenter={handleDragEnter}
  on:dragend={handleDragEnd}
>
  <Button --color-accent="transparent" onClick={() => handleDelete(index)}>
    <RemoveIcon />
  </Button>
  <slot />
  <button
    class="drag-button"
    on:mouseover={() => (isDragEnabled = true)}
    on:mouseout={() => (isDragEnabled = false)}
    on:focus={() => {}}
    on:blur={() => {}}
  >
    <DragIcon />
  </button>
</li>

<style>
  .drag-button {
    height: 4rem;
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    cursor: grab;
  }

  .list-item {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .dragged-list-item {
    background-color: var(--color-card-background);
  }
</style>
