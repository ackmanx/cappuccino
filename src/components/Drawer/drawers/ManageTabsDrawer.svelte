<script lang="ts">
  import type { Writable } from 'svelte/store'

  import type { ChangeEvent, TabType } from '../../../types'
  import DraggableItem from '../../DraggableList/DraggableItem.svelte'
  import DraggableList from '../../DraggableList/DraggableList.svelte'
  import TabInput from '../TabInput.svelte'

  export let tabs: Writable<TabType[]>
  export let isDragEnabled = false
  let tempTabs = structuredClone($tabs)

  function handleArrayUpdate(tabs: TabType[]) {
    tempTabs = tabs
  }

  function handleTabReorder(tabs: TabType[]) {
    tempTabs = tabs
  }

  function handleTabSave() {
    $tabs = tempTabs
    localStorage.setItem('appContent', JSON.stringify($tabs))
  }

  function handleUpdate(event: ChangeEvent, index: number) {
    tempTabs[index][event.currentTarget.name] = event.currentTarget.value
  }

  function handleNewTab() {
    tempTabs = [...tempTabs, { title: '', cards: [], links: [] }]
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<DraggableList onSave={handleTabSave} onNew={handleNewTab} key="tabLinks">
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
