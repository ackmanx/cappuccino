<script lang="ts">
  import type { CardType } from '../../types'
  import Card from './Card.svelte'

  export let cards: CardType[]
  export let onChangeSelectedCard: (cardIndex: number) => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  {#if cards?.length}
    {#each cards as card, index}
      <Card {card} cardIndex={index} {onChangeSelectedCard} />
    {/each}
  {/if}
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  component {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 1rem;
    grid-auto-rows: min-content;
  }
</style>
