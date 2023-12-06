<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  export let isOpen: boolean
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-basis: 420px;
    position: fixed;
    top: 0;
    transition: right 0.3s ease-in;
    padding: 1.6rem;
    z-index: 1;
    background-color: var(--color-card-background);
  }

  .open {
    right: 0;
  }

  .closed {
    right: -50%;
  }

  .overlay {
    position: fixed;
    inset: 0 0 0 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section class:open={isOpen} class:closed={!isOpen}>
  {#if isOpen}
    <slot />
  {/if}
</section>
<div class:overlay={isOpen} />
