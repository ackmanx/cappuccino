<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { Tab } from '../../types'
  import Button from '../inputs/Button/Button.svelte'

  export let tabs: Tab[] = []
  export let selectedTabIndex: number = 0
  export let onChangeTab: (tabIndex: number) => void
</script>

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
    gap: 24px;
    margin-right: 16px;
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

  <Button
    handleClick={() => {
      onChangeSelectedCard(cardIndex)
    }}
  >
    <span class="material-symbols-outlined"> edit </span>
  </Button>
</nav>
