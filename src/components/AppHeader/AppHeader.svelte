<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
    function init(node: HTMLElement) {
        node.focus()
    }
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  input {
    height: 40px;
    width: 50%;
    padding-left: 16px;
    font-size: 24px;
    border: 1px solid #b0b0b0;
    border-radius: 5px;
  }

  img {
      width: 80px;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <img src="logo.svg" alt="cappuccino logo" />
  <input use:init />
</section>
