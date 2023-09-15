<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import AddNewPlaceholder from './lib/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import Card from './lib/Card.svelte'
  import ChangeCardContentsDrawer from './lib/Drawer/ChangeCardContentsDrawer.svelte'
  import Drawer from './lib/Drawer/Drawer.svelte'
  import type { Card as tCard } from './types'

  let isDrawerOpen: boolean = false
  let cards: tCard[] = []
  let selectedCard: tCard

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

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
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

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<main>
  <Drawer isOpen={isDrawerOpen}>
    <ChangeCardContentsDrawer
      cardIndex={selectedCard}
      card={cards[selectedCard]}
      onUpdateCard={handleUpdateCard}
      onChangeSelectedCard={handleSelectCard}
    />
  </Drawer>

  {#each cards as card, index}
    <Card {card} cardIndex={index} onChangeSelectedCard={handleSelectCard} />
  {/each}

  <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
</main>
