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
<section class="cards-list masonry">
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: masonry;
    justify-content: center;
    gap: 1rem;
    grid-auto-rows: min-content;
  }
</style>
