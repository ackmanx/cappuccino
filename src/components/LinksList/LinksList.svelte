<script lang="ts">
  import { getLayerConfig } from '../../context'
  import EditIcon from '../../images/EditIcon.svelte'
  import type { TabType } from '../../types'
  import Link from '../Link/Link.svelte'
  import Button from '../inputs/Button/Button.svelte'
  import EditButton from '../inputs/EditButton/EditButton.svelte'

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
  {#each tabs[selectedTabIndex].links as link}
    <li>
      <Link
        --color-main-background={getComputedStyle(document.documentElement).getPropertyValue(
          '--color-card-background'
        )}
        href={link.url}
      >
        {link.label}
      </Link>
    </li>
  {/each}
  <li class="edit">
    <EditButton onClick={openGridDrawer}><EditIcon /></EditButton>
    <Button --color-accent="transparent" onClick={openGridDrawer} />
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
