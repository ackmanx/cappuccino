<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import type { Card } from '../../types'
  import Button from '../Button/Button.svelte'
  import TextField from '../TextField/TextField.svelte'

  let tempLinksForCard: Card['links'] = []

  // Props
  export let cardIndex: number
  export let card: Card
  export let onUpdateCard
  export let onChangeSelectedCard
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  .buttonContainer {
    display: flex;
    gap: 1.6rem;
    margin-top: auto;
  }

  li {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  /* Hmm how to do this... this was passing a generated class name before
  But now this is actual CSS so how to pass these styles to a component?*/
  .deleteButton {
    background-color: transparent;
    color: var(--color-text);
    font-size: 2.4rem;
    height: 4rem;
    padding: 0 0.5rem;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <TextField label="title" value={card.title} />
  <p>Changing the order, create new, delete, or edit the links</p>
  <ul>
    {#each tempLinksForCard as link}
      <li>
        <Button className="deleteButton">&times;</Button>
        <TextField label="label" value={link.label} />
        <TextField label="url" value={link.url} />
      </li>
    {/each}
  </ul>
  <div>
    <Button>new</Button>
  </div>
  <div class="buttonContainer">
    <Button>save</Button>
    <Button>cancel</Button>
  </div>
</section>
