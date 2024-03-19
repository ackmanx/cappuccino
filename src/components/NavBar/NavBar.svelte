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
    gap: 2.4rem 0.5rem;
    margin: 0;
    padding-right: 1rem;
  }

  button {
    background-color: transparent;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    transition: all 0.25s;
  }

  button:hover {
    background-color: var(--color-card-background);
  }

  button.active {
    background-color: black;
    color: white;
  }
</style>
