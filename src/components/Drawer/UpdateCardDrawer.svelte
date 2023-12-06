<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { onMount } from 'svelte'

  import type { Card } from '../../types'
  import Button from '../Button/Button.svelte'
  import TextField from '../TextField/TextField.svelte'

  let tempLinksForCard: Card['links'] = []

  // Props
  export let card: Card | null
  export let onSave
  export let onCancel

  onMount(() => {
    if (!card) {
      card = { title: 'new card', links: [] }
    }
  })

  function handleTitleInput(event: CustomEvent<KeyboardEvent>) {
    card.title = event.target.value
  }
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

  .cancel-button {
    text-align: right;
    margin-bottom: -10px;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <div class="cancel-button">
    <Button onClick={onCancel}><span class="material-symbols-outlined"> close </span></Button>
  </div>

  <TextField label="title" value={card?.title} onChange={handleTitleInput} />

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
    <Button onClick={() => onSave(card)}>save</Button>
  </div>
</section>
