<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { Tab } from '../../types'

  export let tabs: Tab[] = []
  export let selectedTabIndex = 0
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  ul {
    display: flex;
    gap: 24px;
    /*border: 1px solid;*/
    /*border-radius: 5px;*/
    padding: 16px;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<ul>
  {#each tabs[selectedTabIndex].links as link}
    <li>
      <a href={link.url}>
        {link.label}
      </a>
    </li>
  {/each}
</ul>
