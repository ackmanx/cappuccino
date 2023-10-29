<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AddNewPlaceholder from './lib/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import Card from './lib/Card.svelte'
  import Drawer from './lib/Drawer/Drawer.svelte'
  import UpdateCardDrawer from './lib/Drawer/UpdateCardDrawer.svelte'
  import { appStore } from './lib/store'
  import type { AppStoreValue, Card as tCard } from './types'

  let isDrawerOpen: boolean = false
  let appData: AppStoreValue
  let selectedCardIndex: number

  onMount(() => {
    const appData = JSON.parse(localStorage.getItem('appData') ?? '{}')

    if (!appData.cards) {
      appData.cards = []
    }

    appStore.set(appData)
  })

  // Any time the store is updated, also update local storage to stay in sync
  appStore.subscribe((newAppData) => {
    localStorage.setItem('appData', JSON.stringify(appData))
    appData = newAppData
  })

  function handleAddNewCard() {
    const emptyCard: tCard = { title: 'new card', links: [] }

    appStore.set({
      ...appData,
      cards: [...appData.cards, emptyCard],
    })

    handleSelectCard(appData.cards.length - 1)
  }

  function handleUpdateCard() {
    return null
  }

  function handleSelectCard(cardIndex: number) {
    selectedCardIndex = cardIndex
    isDrawerOpen = true
  }
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .cards-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    align-items: flex-start;
    grid-auto-rows: min-content;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<main>
  <Drawer isOpen={isDrawerOpen}>
    <UpdateCardDrawer
      cardIndex={selectedCardIndex}
      card={appData.cards[selectedCardIndex]}
      onUpdateCard={handleUpdateCard}
      onChangeSelectedCard={handleSelectCard}
    />
  </Drawer>

  <div class="cards-list">
    {#if appData}
      {#each appData.cards as card, index}
        <Card {card} cardIndex={index} onChangeSelectedCard={handleSelectCard} />
      {/each}
    {/if}

    <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
  </div>
</main>
