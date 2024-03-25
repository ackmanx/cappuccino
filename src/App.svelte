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
  import { getLayerConfig, getSettings, setLayerConfig, setSettings } from './context'
  import type { CardType, TabType } from './types'

  setLayerConfig()
  setSettings()
  let layerConfig = getLayerConfig()
  let settings = getSettings()

  let tabs: Writable<TabType[]> = writable([])
  let selectedTabIndex = $settings.defaultTab
  let selectedCardIndex = 0
  onMount(() => {
    const appContent = localStorage.getItem('appContent') ?? '[]'

    if (appContent) {
      $tabs = JSON.parse(appContent)
    }

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
      ...$tabs[selectedTabIndex].cards.slice(0, selectedCardIndex),
      card,
      ...$tabs[selectedTabIndex].cards.slice(selectedCardIndex + 1),
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
<main inert={$layerConfig.activate} style={`--color-accent: ${$settings.color}`}>
  <AppHeader />
  <NavBar
    tabs={$tabs}
    {selectedTabIndex}
    onChangeTab={handleChangeTab}
    onEditTabs={handleEditTabs}
  />
  <LinksList tabs={$tabs} {selectedTabIndex} />
  <CardsList cards={$tabs[selectedTabIndex]?.cards} onChangeSelectedCard={handleChangeCard} />
</main>

<Drawer --color-accent={$settings.color}>
  {#if $layerConfig.subtype === 'grid'}
    <UpdateGridDrawer {tabs} {selectedTabIndex} />
  {:else if $layerConfig.subtype === 'tab'}
    <UpdateTabDrawer {tabs} />
  {:else if $layerConfig.subtype === 'card'}
    <UpdateCardDrawer
      card={$tabs[selectedTabIndex].cards[selectedCardIndex]}
      onSave={handleSaveCard}
    />
  {:else if $layerConfig.subtype === 'setting'}
    <SettingsDrawer {tabs} />
  {/if}
</Drawer>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
</style>
