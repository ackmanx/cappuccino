<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AddNewPlaceholder from './lib/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import AppHeader from './lib/AppHeader/AppHeader.svelte'
  import Card from './lib/Card/Card.svelte'
  import Drawer from './lib/Drawer/Drawer.svelte'
  import EditCardDrawer from './lib/Drawer/UpdateCardDrawer.svelte'
  import type { Card as tCard } from './types'

  let isDrawerOpen: boolean = false
  let cards: tCard[]
  let selectedCard: tCard | null

  onMount(() => {
    cards = JSON.parse(localStorage.getItem('cards') ?? '[]')
  })

  function handleAddNewCard() {
    handleEditCard(null)
  }

  function handleSaveCard() {
    // localStorage.setItem('cards', JSON.stringify(cards))
    return null
  }

  function handleCancelEditCard() {
    isDrawerOpen = false
    /* prettier-ignore */ console.log('^_^', 'close that b')
  }

  function handleEditCard(cardIndex: number | null) {
    selectedCard = cardIndex ? cards[cardIndex] : null
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
  <AppHeader />

  <div class="cards-list">
    {#if cards}
      {#each cards as card, index}
        <Card {card} cardIndex={index} onChangeSelectedCard={handleEditCard} />
      {/each}
    {/if}

    <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
  </div>

  <Drawer isOpen={isDrawerOpen}>
    <EditCardDrawer card={selectedCard} onSave={handleSaveCard} onCancel={handleCancelEditCard} />
  </Drawer>
</main>
