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
    display: flex;
    flex-direction: column;
    flex-basis: 420px;
    position: fixed;
    top: 0;
    transition: right 0.3s ease-in;
    height: 100vh;
    background-color: var(--color-card-background);
    z-index: 1;
    padding: 1.6rem;
  }

  .open {
    right: 0;
  }

  .closed {
    right: -436px;
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
  <slot />
</section>
<div class:overlay={isOpen} />
