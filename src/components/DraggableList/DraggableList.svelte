<script lang="ts">
  import { getContextByDraggableList, setContextByDraggableList } from '../../context'

  export let key: string

  setContextByDraggableList(key)
  const draggableList = getContextByDraggableList(key)

  const handleMouseOver = () => {
    $draggableList = { ...$draggableList, activeListArea: true }
  }

  const handleMouseOut = () => {
    $draggableList = { ...$draggableList, activeListArea: false }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  <ul
    data-test-id={`draggable-list__${key}`}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={() => {}}
    on:blur={() => {}}
  >
    <slot />
  </ul>
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  component {
    padding-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
</style>
