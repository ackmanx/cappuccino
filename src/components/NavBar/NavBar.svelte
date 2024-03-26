<script lang="ts">
  import EditIcon from '../../images/EditIcon.svelte'
  import type { TabType } from '../../types'
  import EditButton from '../inputs/EditButton/EditButton.svelte'

  interface Props {
    tabs: TabType[]
    selectedTabIndex: number
    onChangeTab: (tabIndex: number) => void
    onEditTabs: () => void
  }

  let { tabs = [], selectedTabIndex = 0, onChangeTab, onEditTabs }: Props = $props()
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

  <EditButton onClick={onEditTabs}>
    <EditIcon />
  </EditButton>
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
    border-bottom: 0.2rem solid var(--color-text);
    background-color: #ce7432;
    color: white;
  }
</style>
