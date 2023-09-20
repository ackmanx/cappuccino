<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AddNewPlaceholder from './lib/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import Card from './lib/Card.svelte'
  import ChangeCardContentsDrawer from './lib/Drawer/ChangeCardContentsDrawer.svelte'
  import Drawer from './lib/Drawer/Drawer.svelte'
  import { appStore } from './lib/store'
  import type { AppStore, Card as tCard } from './types'

  let isDrawerOpen: boolean = false
  let cards: tCard[] = []
  let appStoreValue: AppStore
  let selectedCardIndex: number

  onMount(() => {
    const appData = JSON.parse(localStorage.getItem('appData') ?? '{}')
    appStore.set(appData)
  })

  appStore.subscribe((newStore) => {
    appStoreValue = newStore
  })

  function handleAddNewCard() {
    // I think I need to create a svelte store for this
    cards = [...cards, { links: [] }]
  }

  function handleUpdateCard() {
    return null
  }

  function handleSelectCard() {
    return null
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
    <ChangeCardContentsDrawer
      cardIndex={selectedCardIndex}
      card={cards[selectedCardIndex]}
      onUpdateCard={handleUpdateCard}
      onChangeSelectedCard={handleSelectCard}
    />
  </Drawer>

  <div class="cards-list">
    {#if appStoreValue}
      {#each appStoreValue.cards as card, index}
        <Card {card} cardIndex={index} onChangeSelectedCard={handleSelectCard} />
      {/each}
    {/if}

    <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
  </div>
</main>
