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
  let cards: tCard[] = []
  let selectedCardIndex = 0

  onMount(() => {
    cards = JSON.parse(localStorage.getItem('cards') ?? '[]')
  })

  function handleAddNewCard() {
    handleEditCard(null)
  }

  function handleSaveCard(card: tCard) {
    /* prettier-ignore */ console.log('^_^', {card})
    // localStorage.setItem('cards', JSON.stringify(cards))
    return null
  }

  function handleCancelEditCard() {
    isDrawerOpen = false
  }

  function handleEditCard(cardIndex: number | null) {
    // selectedCard = cardIndex ? cards[cardIndex] : null
    isDrawerOpen = true
  }
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 24px;
  }

  button {
    background-color: transparent;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-family: inherit;
  }

  button:hover {
    text-shadow: 2px 2px 8px var(--color-accent);
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<main>
  <AppHeader />

  <nav>
    <ul>
      {#if cards}
        {#each cards as card, index}
          <li>
            <button>{card.title}</button>
          </li>
        {/each}
      {/if}
    </ul>
  </nav>
</main>
