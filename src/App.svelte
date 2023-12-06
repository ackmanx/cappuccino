<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import CardsList from './components/CardsList/CardsList.svelte'
  import LinksList from './components/LinksList/LinksList.svelte'
  import NavBar from './components/NavBar/NavBar.svelte'
  import type { Tab } from './types'

  let isDrawerOpen: boolean = false
  let tabs: Tab[] = []
  let selectedTabIndex = 0

  onMount(() => {
    tabs = JSON.parse(localStorage.getItem('appContent') ?? '[]')
    /* prettier-ignore */ console.log('^_^', 'mounted', tabs)
  })

  function handleChangeTab(tabIndex: number) {
    selectedTabIndex = tabIndex
  }

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
    <NavBar {tabs} {selectedTabIndex} onChangeTab={handleChangeTab} />
    <LinksList {tabs} {selectedTabIndex} />
    <CardsList {tabs} {selectedTabIndex} />
  </main>
{/if}
