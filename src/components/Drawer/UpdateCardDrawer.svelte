<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import { getLayerConfig } from '../../context'
  import DragIcon from '../../svgs/DragIcon.svelte'
  import type { CardType, ChangeEvent } from '../../types'
  import Button from '../inputs/Button/Button.svelte'
  import TextField from '../inputs/TextField/TextField.svelte'

  // Props
  export let card: CardType
  export let onSave: (card: CardType) => void

  let layerConfig = getLayerConfig()
  let draggedOver: number
  let grabbed: number
  let tempCardState = { ...card }
  let isDragEnabled: boolean

  onMount(() => {
    if (!card) {
      card = { title: 'new card', links: [] }
    }
  })
  function handleAddNewLink() {
    tempCardState = {
      ...tempCardState,
      links: [...tempCardState.links, { url: 'https://', label: '' }],
    }
  }

  function handleDeleteLink(linkIndex: number) {
    const newLinkArray = [
      ...tempCardState.links.slice(0, linkIndex),
      ...tempCardState.links.slice(linkIndex + 1),
    ]
    tempCardState = {
      ...tempCardState,
      links: newLinkArray,
    }
  }

  function handleUpdateLinks(event: ChangeEvent, linkIndex: number) {
    const newLinkArray = [...tempCardState.links].map((link, index) =>
      index === linkIndex
        ? { ...tempCardState.links[index], [event.currentTarget.name]: event.currentTarget.value }
        : link
    )

    tempCardState = {
      ...tempCardState,
      links: newLinkArray,
    }
  }

  function handleDragStart(event: DragEvent) {
    if (event) {
      const currentTarget = event.currentTarget as HTMLButtonElement
      console.log('dragStart', currentTarget.dataset.index)
      if (currentTarget.dataset.index) {
        grabbed = parseInt(currentTarget.dataset.index)
      }
    }
  }

  const enableDropping = (event: DragEvent) => {
    event.preventDefault()
  }

  function handleDragEnter(event: DragEvent) {
    const currentTarget = event.currentTarget as HTMLButtonElement
    const index = currentTarget.dataset.index

    if (index) {
      draggedOver = parseInt(index)
    }

    console.log('dragEnter', currentTarget.dataset.index)
  }

  function handleDrop(event: DragEvent) {
    console.log('onDrop', event.currentTarget)
    console.log('grabbed', grabbed)
    const currentTarget = event.currentTarget as HTMLButtonElement
    const index = currentTarget.dataset.index
    console.log('index', index)
    if (index) {
      const linksToChange = tempCardState.links
      const linkToMove = linksToChange.splice(grabbed, 1)
      linksToChange.splice(parseInt(index), 0, linkToMove[0])
      const newCard = {
        ...tempCardState,
        links: linksToChange,
      }
      console.log('arrayChange', newCard)
      tempCardState = newCard
      draggedOver = -1
    }
  }

  function handleSave() {
    onSave(tempCardState)
    handleCancel()
  }

  function handleCancel() {
    $layerConfig = { ...$layerConfig, activate: false }
  }

  function handleTitleInput(event: ChangeEvent) {
    const currentTarget = event.currentTarget as HTMLInputElement
    tempCardState.title = currentTarget.value
  }
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .button-container {
    display: flex;
    font-size: 1.6rem;
    gap: 1.6rem;
    padding-top: 1rem;
  }

  li {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  /* Hmm how to do this... this was passing a generated class name before
  But now this is actual CSS so how to pass these styles to a component?*/
  .delete-button {
    background-color: transparent;
    color: var(--color-text);
    font-size: 2.4rem;
    height: 4rem;
    padding: 0 0.5rem;
  }

  /*.cancel-button {*/
  /*  text-align: right;*/
  /*  margin-bottom: -10px;*/
  /*}*/

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
    gap: 1.6rem;
    align-items: center;
    border-bottom: 2px solid var(--color-card-background);
  }

  .dragged-list-item {
    border-bottom: 2px dashed var(--color-accent);
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<TextField
  value={tempCardState?.title}
  onChange={handleTitleInput}
  name="label"
  type="text"
  label="title"
/>
<p>Changing the order, create new, delete, or edit the links</p>
<ul>
  {#each tempCardState?.links as link, index}
    <li
      class="list-item"
      class:dragged-list-item={draggedOver === index}
      on:dragover={enableDropping}
      data-index={index}
      draggable={isDragEnabled}
      on:dragstart={handleDragStart}
      on:drop={handleDrop}
      on:dragenter={handleDragEnter}
    >
      <Button onClick={() => handleDeleteLink(index)}>
        <span class="delete-button">&times;</span>
      </Button>
      <TextField
        value={link.label}
        onChange={(event) => handleUpdateLinks(event, index)}
        name="label"
        type="text"
        label="label"
      />
      <TextField
        value={link.url}
        onChange={(event) => handleUpdateLinks(event, index)}
        name="url"
        type="text"
        label="url"
      />
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
  {/each}
</ul>
<div class="button-container">
  <Button onClick={handleAddNewLink}>new</Button>
</div>
<div class="button-container">
  <Button onClick={handleSave}>save</Button>
  <Button classes="cancel-button" onClick={handleCancel}>cancel</Button>
</div>
