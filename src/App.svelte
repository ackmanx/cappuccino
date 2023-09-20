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
  let appData: AppStore
  let selectedCardIndex: number

  onMount(() => {
    const appData = JSON.parse(localStorage.getItem('appData') ?? '{}')
    appStore.set(appData)
  })

  appStore.subscribe((newStore) => {
    appData = newStore
  })

  function handleAddNewCard() {
    const emptyCard: tCard = { title: 'new card', links: [] }

    appStore.set({
      ...appData,
      cards: [...appData.cards, emptyCard],
    })

    localStorage.setItem('appData', JSON.stringify(appData))
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
