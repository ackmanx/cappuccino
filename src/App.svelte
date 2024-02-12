<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'
  import { type Writable, writable } from 'svelte/store'

  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import CardsList from './components/CardsList/CardsList.svelte'
  import Drawer from './components/Drawer/Drawer.svelte'
  import SettingsDrawer from './components/Drawer/SettingsDrawer.svelte'
  import UpdateCardDrawer from './components/Drawer/UpdateCardDrawer.svelte'
  import UpdateGridDrawer from './components/Drawer/UpdateGridDrawer.svelte'
  import UpdateTabDrawer from './components/Drawer/UpdateTabDrawer.svelte'
  import LinksList from './components/LinksList/LinksList.svelte'
  import NavBar from './components/NavBar/NavBar.svelte'
  import { getLayerConfig, setLayerConfig } from './context'
  import type { CardType, TabType } from './types'

  let tabs: Writable<TabType[]> = writable([])
  let selectedTabIndex = 0
  let selectedCardIndex = 0
  let cards: CardType[] = []

  setLayerConfig()
  let layerConfig = getLayerConfig()

  onMount(() => {
    const appContent = localStorage.getItem('appContent') ?? '[]'

    if (appContent) {
      $tabs = JSON.parse(appContent)
    }

    cards = $tabs?.length ? $tabs[selectedTabIndex].cards : []
    /* prettier-ignore */ console.log('^_^', 'mounted', $tabs)
  })

  function handleChangeTab(tabIndex: number) {
    selectedTabIndex = tabIndex
  }

  function handleChangeCard(cardIndex: number) {
    selectedCardIndex = cardIndex
  }

  function handleSaveCard(card: CardType) {
    const cardsUpdate = [
      ...cards.slice(0, selectedCardIndex),
      card,
      ...cards.slice(selectedCardIndex + 1),
    ]
    console.log('cardupdate', cardsUpdate)
    const tabUpdate = {
      ...$tabs[selectedTabIndex],
      cards: [...cardsUpdate],
    }
    const newAppState = [
      ...$tabs.slice(0, selectedTabIndex),
      tabUpdate,
      ...$tabs.slice(selectedTabIndex + 1),
    ]
    console.log(newAppState)
    $tabs = newAppState
    localStorage.setItem('appContent', JSON.stringify(newAppState))
  }

  function handleEditTabs() {
    $layerConfig = { activate: true, type: 'drawer', subtype: 'tab' }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<main inert={$layerConfig.activate}>
  <AppHeader />
  <NavBar
    tabs={$tabs}
    {selectedTabIndex}
    onChangeTab={handleChangeTab}
    onEditTabs={handleEditTabs}
  />
  <LinksList tabs={$tabs} {selectedTabIndex} />
  <CardsList {cards} onChangeSelectedCard={handleChangeCard} />
</main>

<Drawer>
  {#if $layerConfig.subtype === 'grid'}
    <UpdateGridDrawer {tabs} {selectedTabIndex} />
  {:else if $layerConfig.subtype === 'tab'}
    <UpdateTabDrawer {tabs} />
  {:else if $layerConfig.subtype === 'card'}
    <UpdateCardDrawer card={cards[selectedCardIndex]} onSave={handleSaveCard} />
  {:else if $layerConfig.subtype === 'setting'}
    <SettingsDrawer />
  {/if}
</Drawer>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
</style>
