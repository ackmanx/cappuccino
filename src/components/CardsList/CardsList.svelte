<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { CardType } from '../../types'
  import Card from './Card.svelte'

  export let cards: CardType[] = []
  export let onChangeSelectedCard: (cardIndex: number) => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section class="cards-list">
  {#if cards.length}
    {#each cards as card, index}
      <Card {card} cardIndex={index} {onChangeSelectedCard} />
    {/each}
  {/if}
</section>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    align-items: flex-start;
    grid-auto-rows: min-content;
  }
</style>
