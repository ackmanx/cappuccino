<script lang="ts">
  import type { Writable } from 'svelte/store'

  import type { CardType, ChangeEvent, LinkType, TabType } from '../../../types'
  import DraggableItem from '../../DraggableList/DraggableItem.svelte'
  import DraggableList from '../../DraggableList/DraggableList.svelte'
  import CardInput from '../CardInput.svelte'
  import LinkInput from '../LinkInput.svelte'

  //props
  export let tabs: Writable<TabType[]>
  export let selectedTabIndex: number
  // variables
  let isDragEnabled: boolean
  let isDragEnabled2: boolean
  let tempTab = structuredClone($tabs[selectedTabIndex])

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
  }

  function handleUpdate(event: ChangeEvent, index: number) {
    tempTab.links[index][event.currentTarget.name] = event.currentTarget.value
  }

  function handleUpdateCard(event: ChangeEvent, index: number) {
    tempTab.cards[index][event.currentTarget.name] = event.currentTarget.value
  }

  function handleNewLink() {
    tempTab.links = [...tempTab.links, { url: '', label: '' }]
  }
  function handleNewCard() {
    tempTab.cards = [...tempTab.cards, { title: '', links: [] }]
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<p>Update tab links, their order or content</p>
<DraggableList key="tabLinks" onNew={handleNewLink}>
  {#each tempTab?.links as link, index}
    <DraggableItem
      key="tabLinks"
      onArrayUpdate={handleArrayUpdate}
      {isDragEnabled}
      dataArray={tempTab.links}
      {index}
    >
      <LinkInput onUpdateLink={handleUpdate} element={link} {index} />
    </DraggableItem>
  {/each}
</DraggableList>
<DraggableList key="cardOrder" onNew={handleNewCard} onSave={handleSaveAll}>
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
