<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AddNewPlaceholder from './components/AddNewPlaceholder/AddNewPlaceholder.svelte'
  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import Card from './components/CardsList/Card.svelte'
  import CardsList from './components/CardsList/CardsList.svelte'
  import Drawer from './components/Drawer/Drawer.svelte'
  import EditCardDrawer from './components/Drawer/UpdateCardDrawer.svelte'
  import LinksList from './components/LinksList/LinksList.svelte'
  import TabsList from './components/TabsList/TabsList.svelte'
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
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
{#if tabs.length}
  <main>
    <AppHeader />
    <TabsList {tabs} />
    <LinksList {tabs} {selectedTabIndex} />
    <CardsList {tabs} {selectedTabIndex} />
  </main>
{/if}
