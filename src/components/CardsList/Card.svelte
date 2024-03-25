<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { getLayerConfig } from '../../context'
  import EditIcon from '../../images/EditIcon.svelte'
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
<component>
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
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  component {
    background-color: var(--color-card-background);
    padding: 16px;
    border-radius: 10px;
  }

  ul {
    margin: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
