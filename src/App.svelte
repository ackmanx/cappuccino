<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AddNewPlaceholder from './components/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import Card from './components/Card/Card.svelte'
  import Drawer from './components/Drawer/Drawer.svelte'
  import EditCardDrawer from './components/Drawer/UpdateCardDrawer.svelte'
  import type { Tab } from './types'

  let isDrawerOpen: boolean = false
  let tabs: Tab[] = []
  let selectedTabIndex = 0

  onMount(() => {
    tabs = JSON.parse(localStorage.getItem('appContent') ?? '[]')
    /* prettier-ignore */ console.log('^_^', 'mounted', tabs)
  })

  function handleAddNewCard() {
    handleEditCard(null)
  }

  function handleSaveCard(tab: Tab) {
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
    border-bottom: 2px solid transparent;
  }

  button:hover {
    border-bottom: 2px solid #acacac;
  }

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
{#if tabs.length}
  <main>
    <AppHeader />

    <nav>
      <ul>
        {#each tabs as tab, index}
          <li>
            <button>{tab.title}</button>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="cards-list">
      {#each tabs[selectedTabIndex].cards as card, index}
        <Card {card} cardIndex={index} />
      {/each}
    </div>
  </main>
{/if}
