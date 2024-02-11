<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import AddIcon from './add-icon.png'

  export let onClickNewPlaceholder: () => void
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<button on:click={onClickNewPlaceholder}>
  <img src={AddIcon} alt="add card icon" />
</button>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  button {
    background-color: var(--color-card-background);
    padding: 16px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  button:hover {
    outline: 1px solid var(--color-text);
    box-sizing: border-box;
  }

  img {
    width: 50px;
    filter: contrast(0);
  }
</style>
