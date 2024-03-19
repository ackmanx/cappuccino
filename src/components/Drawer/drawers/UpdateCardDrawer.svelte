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
  import TextField from '../../inputs/TextField/TextField.svelte'
  import LinkInput from '../LinkInput.svelte'

  // Props
  export let card: CardType
  export let onSave: (card: CardType) => void

  let layerConfig = getLayerConfig()
  let tempCard = { ...card }
  let isDragEnabled: boolean

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
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<TextField
  value={tempCard?.title}
  onChange={handleTitleInput}
  name="label"
  type="text"
  label="title"
/>
<p>Changing the order, create new, delete, or edit the links</p>

<DraggableList onSave={handleSave} onNew={handleAddNewLink} key="tabLinks">
  {#each tempCard?.links as link, index}
    <DraggableItem
      key="tabLinks"
      onArrayUpdate={handleArrayUpdate}
      {isDragEnabled}
      dataArray={tempCard.links}
      {index}
    >
      <LinkInput onUpdateLink={handleUpdateLinks} element={link} {index} />
    </DraggableItem>
  {/each}
</DraggableList>
