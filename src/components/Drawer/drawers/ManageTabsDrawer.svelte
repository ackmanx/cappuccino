<script lang="ts">
  import type { Writable } from 'svelte/store'

  import { getLayerConfig } from '../../../context'
  import type { ChangeEvent, TabType } from '../../../types'
  import DraggableItem from '../../DraggableList/DraggableItem.svelte'
  import DraggableList from '../../DraggableList/DraggableList.svelte'
  import Button from '../../inputs/Button/Button.svelte'
  import TextField from '../../inputs/TextField/TextField.svelte'
  import TabInput from '../TabInput.svelte'

  export let tabs: Writable<TabType[]>
  export let isDragEnabled = false
  let tempTabs = structuredClone($tabs)
  const layerConfig = getLayerConfig()

  function handleArrayUpdate(tabs: TabType[]) {
    tempTabs = tabs
  }

  function handleTabReorder(tabs: TabType[]) {
    tempTabs = tabs
  }

  function handleTabSave() {
    $tabs = tempTabs
    localStorage.setItem('appContent', JSON.stringify($tabs))
    handleCancel()
  }

  function handleUpdate(event: ChangeEvent, index: number) {
    tempTabs[index][event.currentTarget.name] = event.currentTarget.value
  }

  function handleNewTab() {
    tempTabs = [...tempTabs, { title: '', cards: [], links: [] }]
  }

  function handleCancel() {
    $layerConfig = { ...$layerConfig, activate: false }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  <DraggableList key="tabLinks">
    {#each tempTabs as tab, index}
      <DraggableItem
        key="tabLinks"
        onArrayUpdate={handleArrayUpdate}
        {isDragEnabled}
        dataArray={$tabs}
        {index}
      >
        <TabInput onUpdateTab={handleUpdate} element={tab} {index} />
      </DraggableItem>
    {/each}
  </DraggableList>

  <TextField isPlaceholderInput placeholder="new tab name" onChange={(event) => {}} />

  <div class="button-container">
    <Button onClick={handleTabSave}>save</Button>
    <Button variant="secondary" onClick={handleCancel}>cancel</Button>
  </div>
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .button-container {
    display: flex;
    justify-content: flex-end;
    font-size: 1.6rem;
    gap: 1rem;
    margin-top: 2rem;
  }
</style>
