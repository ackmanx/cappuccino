<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { getLayerConfig } from '../../context'
  import EditIcon from '../../svgs/EditIcon.svelte'
  import type { TabType } from '../../types'
  import Link from '../Link/Link.svelte'
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
        <Link href={link.url}>
          {link.label}
        </Link>
      </li>
    {/each}
  {/if}
  <li class="edit">
    <Button --color-accent="transparent" onClick={openGridDrawer}>
      <EditIcon />
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
    padding: 16px;
  }
  .edit {
    margin-left: auto;
  }
</style>
