<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { CardType } from '../../types'
  import Button from '../inputs/Button/Button.svelte'
  import { getLayerConfig } from '../../context'

  // Props
  export let card: CardType
  export let cardIndex: number
  let layerConfig = getLayerConfig()
  export let onChangeSelectedCard: (cardIndex: number) => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <div class="header">
    <h2>{card.title}</h2>
    <Button
      onClick={() => {
        $layerConfig = { activate: true, type: 'drawer', subtype: 'card' }
        onChangeSelectedCard(cardIndex)
      }}
    >
      <span class="material-symbols-outlined"> edit </span>
    </Button>
  </div>
  <ul>
    {#each card.links as { label, url }}
      <li>
        <a href={url}>
          {label}
        </a>
      </li>
    {/each}
  </ul>
</section>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    background-color: var(--color-card-background);
    padding: 16px;
    border-radius: 10px;
  }

  a {
    width: 100%;
    padding: 8px;
    display: inline-block;
    font-size: 16px;
  }

  a:hover {
    background-color: var(--color-main-background);
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
