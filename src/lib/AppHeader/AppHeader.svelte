<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script>
  import AddNewPlaceholder from '../AddNewPlaceholder/AddNewPlaceholder.svelte'

  export let onAddNewCard
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    height: 60px;
    width: 50%;
    padding-left: 16px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 3px black;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <AddNewPlaceholder onClickNewPlaceholder={onAddNewCard} />
  <!-- svelte-ignore a11y-autofocus -->
  <input autofocus />
  <AddNewPlaceholder onClickNewPlaceholder={onAddNewCard} />
</section>
