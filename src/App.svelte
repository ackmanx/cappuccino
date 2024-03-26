<script lang="ts">
  import { onMount } from 'svelte'
  import { type Writable, writable } from 'svelte/store'

  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import CardsList from './components/CardsList/CardsList.svelte'
  import Drawer from './components/Drawer/Drawer.svelte'
  import ManageTabsDrawer from './components/Drawer/drawers/ManageTabsDrawer.svelte'
  import SettingsDrawer from './components/Drawer/drawers/SettingsDrawer.svelte'
  import UpdateCardDrawer from './components/Drawer/drawers/UpdateCardDrawer.svelte'
  import UpdateGridDrawer from './components/Drawer/drawers/UpdateGridDrawer.svelte'
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

    const tabUpdate = {
      ...$tabs[selectedTabIndex],
      cards: [...cardsUpdate],
    }

    const newAppState = [
      ...$tabs.slice(0, selectedTabIndex),
      tabUpdate,
      ...$tabs.slice(selectedTabIndex + 1),
    ]

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
  {#if $tabs.length}
    <LinksList tabs={$tabs} {selectedTabIndex} />
    <CardsList cards={$tabs[selectedTabIndex]?.cards} onChangeSelectedCard={handleChangeCard} />
  {/if}
</main>

{#if $layerConfig.subtype === 'grid'}
  <Drawer title="Update Tab" --color-accent={$settings.color}>
    <UpdateGridDrawer {tabs} {selectedTabIndex} />
  </Drawer>
{:else if $layerConfig.subtype === 'tab'}
  <Drawer title="Manage Tabs" --color-accent={$settings.color}>
    <ManageTabsDrawer {tabs} />
  </Drawer>
{:else if $layerConfig.subtype === 'card'}
  <Drawer title="Update Card" --color-accent={$settings.color}>
    <UpdateCardDrawer
      card={$tabs[selectedTabIndex].cards[selectedCardIndex]}
      onSave={handleSaveCard}
    />
  </Drawer>
{:else if $layerConfig.subtype === 'setting'}
  <Drawer title="Settings" --color-accent={$settings.color}>
    <SettingsDrawer {tabs} />
  </Drawer>
{/if}

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
</style>
