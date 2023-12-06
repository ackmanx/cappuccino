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
  }

  button:hover {
    border-bottom: 2px solid #acacac;
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

    {#each tabs[selectedTabIndex].cards as card, index}
      <Card {card} cardIndex={index} />
    {/each}
  </main>
{/if}
