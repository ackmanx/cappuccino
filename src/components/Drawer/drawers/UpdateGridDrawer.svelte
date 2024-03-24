<script lang="ts">
  import type { Writable } from 'svelte/store'

  import { getLayerConfig } from '../../../context'
  import type { CardType, ChangeEvent, LinkType, TabType } from '../../../types'
  import DraggableItem from '../../DraggableList/DraggableItem.svelte'
  import DraggableList from '../../DraggableList/DraggableList.svelte'
  import Button from '../../inputs/Button/Button.svelte'
  import TextField from '../../inputs/TextField/TextField.svelte'
  import CardInput from '../CardInput.svelte'
  import LinkInput from '../LinkInput.svelte'

  //props
  export let tabs: Writable<TabType[]>
  export let selectedTabIndex: number
  // variables
  let isDragEnabled: boolean
  let isDragEnabled2: boolean
  let tempTab = structuredClone($tabs[selectedTabIndex])
  const layerConfig = getLayerConfig()
  let shouldTakeFocusIndex: number | undefined

  function handleArrayUpdate(links: LinkType[]) {
    tempTab.links = links
  }

  function handleCardReorder(cards: CardType[]) {
    tempTab.cards = cards
  }

  function handleSaveAll() {
    $tabs[selectedTabIndex].links = tempTab.links
    localStorage.setItem('appContent', JSON.stringify($tabs))

    $tabs[selectedTabIndex].cards = tempTab.cards
    localStorage.setItem('appContent', JSON.stringify($tabs))

    handleCancel()
  }

  function handleUpdate(event: ChangeEvent, index: number) {
    tempTab.links[index][event.currentTarget.name] = event.currentTarget.value
  }

  function handleUpdateCard(event: ChangeEvent, index: number) {
    tempTab.cards[index][event.currentTarget.name] = event.currentTarget.value
  }

  /*
   * Really this only happens once because after the first input we create a new entry and reset this
   */
  function handlePlaceholderInput(event: InputEvent) {
    const input = event.target as HTMLInputElement
    const firstLetterOfInput = input.value

    tempTab.links = [...tempTab.links, { url: '', label: '' }]
    tempTab.links[tempTab.links.length - 1].label = firstLetterOfInput

    input.value = ''

    shouldTakeFocusIndex = tempTab.links.length - 1
  }

  function handleNewLink() {
    tempTab.links = [...tempTab.links, { url: '', label: '' }]
  }

  function handleNewCard() {
    tempTab.cards = [...tempTab.cards, { title: '', links: [] }]
  }

  function handleCancel() {
    $layerConfig = { ...$layerConfig, activate: false }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  <p>Update tab links, their order or content</p>
  <DraggableList key="tabLinks">
    {#each tempTab?.links as link, index}
      <DraggableItem
        key="tabLinks"
        onArrayUpdate={handleArrayUpdate}
        {isDragEnabled}
        dataArray={tempTab.links}
        {index}
      >
        <LinkInput
          onUpdateLink={handleUpdate}
          element={link}
          {index}
          shouldTakeFocus={shouldTakeFocusIndex === index}
        />
      </DraggableItem>
    {/each}
  </DraggableList>

  <TextField isPlaceholderInput placeholder="new link name" onInput={handlePlaceholderInput} />

  <DraggableList key="cardOrder">
    <p>Update grid order or card titles</p>

    {#each tempTab.cards as card, index}
      <DraggableItem
        key="cardOrder"
        onArrayUpdate={handleCardReorder}
        isDragEnabled={isDragEnabled2}
        dataArray={tempTab.cards}
        {index}
      >
        <CardInput element={card} onUpdateCard={handleUpdateCard} {index} />
      </DraggableItem>
    {/each}
  </DraggableList>

  <TextField isPlaceholderInput placeholder="new card name" onInput={handlePlaceholderInput} />

  <div class="button-container">
    <Button onClick={handleSaveAll}>save</Button>
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
