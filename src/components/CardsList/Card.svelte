<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { getLayerConfig } from '../../context'
  import EditIcon from '../../svgs/EditIcon.svelte'
  import type { CardType } from '../../types'
  import Link from '../Link/Link.svelte'
  import Button from '../inputs/Button/Button.svelte'

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
      --color-accent="transparent"
      onClick={() => {
        $layerConfig = { activate: true, type: 'drawer', subtype: 'card' }
        onChangeSelectedCard(cardIndex)
      }}
    >
      <EditIcon />
    </Button>
  </div>
  <ul>
    {#each card.links as { label, url }}
      <li>
        <Link href={url}>
          {label}
        </Link>
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
