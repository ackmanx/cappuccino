<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import EditIcon from '../../svgs/EditIcon.svelte'
  import type { TabType } from '../../types'
  import Button from '../inputs/Button/Button.svelte'

  export let tabs: TabType[] = []
  export let selectedTabIndex: number = 0
  export let onChangeTab: (tabIndex: number) => void
  export let onEditTabs: () => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<nav>
  <ul>
    {#each tabs as tab, index}
      <li>
        <button class:active={selectedTabIndex === index} on:click={() => onChangeTab(index)}>
          {tab.title}
        </button>
      </li>
    {/each}
  </ul>

  <Button --color-accent="transparent" onClick={onEditTabs}>
    <EditIcon /> edit tabs
  </Button>
</nav>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 0;
    padding-right: 1rem;
  }

  button {
    background-color: transparent;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-family: inherit;
    border-bottom: 2px solid transparent;
  }

  button:hover {
    border-bottom: 2px solid #acacac;
  }

  button.active {
    border-bottom: 2px solid var(--color-text);
  }
</style>
