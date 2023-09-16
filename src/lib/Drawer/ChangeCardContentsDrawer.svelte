<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import Button from '../Button/Button.svelte'
  import TextField from '../TextField/TextField.svelte'

  let tempLinksForCard = []

  // Props
  export let cardIndex
  export let card
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
  <TextField type="text" label="title" />
  <p>Changing the order, create new, delete, or edit the links</p>
  <ul>
    {#each tempLinksForCard as card}
      <li>
        <Button className="deleteButton">&times;</Button>
        <TextField type="text" label="label" />
        <TextField type="text" label="url" />
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
