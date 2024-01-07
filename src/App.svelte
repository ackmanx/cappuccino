<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import AppHeader from './components/AppHeader/AppHeader.svelte'
  import CardsList from './components/CardsList/CardsList.svelte'
  import Drawer from './components/Drawer/Drawer.svelte'
  import LinksList from './components/LinksList/LinksList.svelte'
  import NavBar from './components/NavBar/NavBar.svelte'
  import type { Tab } from './types'
  import { getLayerConfig, setLayerConfig} from "./context"

  let tabs: Tab[] = []
  let selectedTabIndex = 0
  setLayerConfig()
  let layerConfig = getLayerConfig()
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
      $layerConfig = {...$layerConfig, activate: false}
  }

  function handleEditCard(cardIndex: number | null) {
    // selectedCard = cardIndex ? cards[cardIndex] : null
      $layerConfig = {activate: true, type: "drawer", subtype: 'card'}
  }

  function handleEditTabs() {
      $layerConfig = {activate: true, type: "drawer", subtype: 'tab'}

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
  <main inert={$layerConfig.activate}>
    <AppHeader />
    <NavBar {tabs} {selectedTabIndex} onChangeTab={handleChangeTab} onEditTabs={handleEditTabs} />
    <LinksList {tabs} {selectedTabIndex} />
    <CardsList {tabs} {selectedTabIndex} />
  </main>
{/if}

<Drawer>
  <h1>hello world</h1>
  {#if $layerConfig.subtype === 'grid'}
    Grid
  {:else if $layerConfig.subtype === 'tab'}
    Tab
  {:else if $layerConfig.subtype === 'card'}
    Card
  {/if}
</Drawer>
