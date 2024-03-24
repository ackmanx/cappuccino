<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import { getLayerConfig } from '../../../context'
  import type { CardType, ChangeEvent, LinkType } from '../../../types'
  import DraggableItem from '../../DraggableList/DraggableItem.svelte'
  import DraggableList from '../../DraggableList/DraggableList.svelte'
  import Button from '../../inputs/Button/Button.svelte'
  import TextField from '../../inputs/TextField/TextField.svelte'
  import LinkInput from '../LinkInput.svelte'

  // Props
  export let card: CardType
  export let onSave: (card: CardType) => void

  let layerConfig = getLayerConfig()
  let tempCard = { ...card }
  let isDragEnabled: boolean
  let shouldTakeFocusIndex: number | undefined

  onMount(() => {
    if (!card) {
      card = { title: 'new card', links: [] }
    }
  })
  function handleAddNewLink() {
    tempCard = {
      ...tempCard,
      links: [...tempCard.links, { url: 'https://', label: '' }],
    }
  }

  function handleUpdateLinks(event: ChangeEvent, linkIndex: number) {
    const newLinkArray = [...tempCard.links].map((link, index) =>
      index === linkIndex
        ? { ...tempCard.links[index], [event.currentTarget.name]: event.currentTarget.value }
        : link
    )

    tempCard = {
      ...tempCard,
      links: newLinkArray,
    }
  }

  function handleSave() {
    onSave(tempCard)
    handleCancel()
  }

  function handleCancel() {
    $layerConfig = { ...$layerConfig, activate: false }
  }

  function handleTitleInput(event: ChangeEvent) {
    const currentTarget = event.currentTarget as HTMLInputElement
    tempCard.title = currentTarget.value
  }

  function handleArrayUpdate(links: LinkType[]) {
    tempCard.links = links
  }

  function handlePlaceholderInputForLinks(event: InputEvent) {
    const input = event.target as HTMLInputElement
    const firstLetterOfInput = input.value

    tempCard.links = [...tempCard.links, { url: '', label: '' }]
    tempCard.links[tempCard.links.length - 1].label = firstLetterOfInput

    input.value = ''

    shouldTakeFocusIndex = tempCard.links.length - 1
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  <TextField value={tempCard?.title} onChange={handleTitleInput} name="label" />

  <p>Changing the order, create new, delete, or edit the links</p>

  <DraggableList key="tabLinks">
    {#each tempCard?.links as link, index}
      <DraggableItem
        key="tabLinks"
        onArrayUpdate={handleArrayUpdate}
        {isDragEnabled}
        dataArray={tempCard.links}
        {index}
      >
        <LinkInput
          onUpdateLink={handleUpdateLinks}
          element={link}
          {index}
          shouldTakeFocus={shouldTakeFocusIndex === index}
        />
      </DraggableItem>
    {/each}

    <TextField
      isPlaceholderInput
      placeholder="new link name"
      onInput={handlePlaceholderInputForLinks}
    />
  </DraggableList>

  <div class="button-container">
    <Button onClick={handleSave}>save</Button>
    <Button variant="secondary" onClick={handleCancel}>cancel</Button>
  </div>
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .button-container {
    display: flex;
    justify-content: flex-end;
    font-size: 1.6rem;
    gap: 1rem;
    margin-top: 2rem;
  }
</style>
