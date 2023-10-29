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
  import type { Card as tCard } from './types'

  let isDrawerOpen: boolean = false
  let cards: tCard[]
  let selectedCardIndex: number

  onMount(() => {
    cards = JSON.parse(localStorage.getItem('cards') ?? '[]')
  })

  function handleAddNewCard() {
    const emptyCard: tCard = { title: 'new card', links: [] }

    cards.push(emptyCard)
    cards = cards // Svelte doesn't know a push happened without an assignment

    localStorage.setItem('cards', JSON.stringify(cards))

    handleSelectCard(cards.length - 1)
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
      card={cards[selectedCardIndex]}
      onUpdateCard={handleUpdateCard}
      onChangeSelectedCard={handleSelectCard}
    />
  </Drawer>

  <div class="cards-list">
    {#if cards}
      {#each cards as card, index}
        <Card {card} cardIndex={index} onChangeSelectedCard={handleSelectCard} />
      {/each}
    {/if}

    <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
  </div>
</main>
