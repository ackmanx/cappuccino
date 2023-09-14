<script lang="ts">
  import AddNewPlaceholder from './lib/AddNewPlaceholder.svelte'
  import Card from './lib/Card.svelte'
  import ChangeCardContentsDrawer from './lib/ChangeCardContentsDrawer.svelte'
  import Drawer from './lib/Drawer.svelte'
  import type { Card as CardType } from './types'

  let isDrawerOpen: boolean = false
  let cards: CardType[] = []
  let selectedCard: CardType

  function handleAddNewCard() {
    return null
  }

  function handleUpdateCard() {
    return null
  }

  function handleSelectCard() {
    return null
  }
</script>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    align-items: flex-start;
    grid-auto-rows: min-content;
  }
</style>

<main>
  <Drawer variant={isDrawerOpen ? 'open' : 'default'}>
    <ChangeCardContentsDrawer
      cardIndex={selectedCard}
      card={cards[selectedCard]}
      onUpdateCard={handleUpdateCard}
      onChangeSelectedCard={handleSelectCard}
    />
  </Drawer>

  {#each cards as card, index}
    <Card
      key={`${card.title}${index}`}
      {card}
      cardIndex={index}
      onChangeSelectedCard={handleSelectCard}
    />
  {/each}

  <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
</main>
