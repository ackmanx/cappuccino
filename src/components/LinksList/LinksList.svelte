<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { getLayerConfig } from '../../context'
  import type { TabType } from '../../types'
  import Button from '../inputs/Button/Button.svelte'

  const layerConfig = getLayerConfig()
  export let tabs: TabType[] = []
  export let selectedTabIndex = 0

  function openGridDrawer() {
    $layerConfig = { activate: true, type: 'drawer', subtype: 'grid' }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<ul>
  {#if tabs.length}
    {#each tabs[selectedTabIndex].links as link}
      <li>
        <a href={link.url}>
          {link.label}
        </a>
      </li>
    {/each}
  {/if}
  <li class="edit">
    <Button --color-accent="transparent" onClick={openGridDrawer}>
      <span class="material-symbols-outlined"> edit </span>
    </Button>
  </li>
</ul>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  ul {
    display: flex;
    gap: 24px;
    align-items: center;
    /*border: 1px solid;*/
    /*border-radius: 5px;*/
    padding: 16px;
  }
  .edit {
    margin-left: auto;
  }
</style>
